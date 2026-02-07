// Funções globais para manipulação do DOM

/**
 * Atualiza o select de rotas com dados disponíveis
 */
function updateRoutesSelect() {
    const select = document.getElementById('routeSelect');
    
    if (!select || !routesData.routes) return;

    routesData.routes.forEach(route => {
        const option = document.createElement('option');
        option.value = route.id;
        option.textContent = `${route.name} (${route.distance} km)`;
        select.appendChild(option);
    });
}

/**
 * Atualiza a exibição da distância quando uma rota é selecionada
 * @param {string} routeId - ID da rota selecionada
 */
function updateDistanceDisplay(routeId) {
    const distanceDisplay = document.getElementById('distanceDisplay');
    
    if (!routeId) {
        distanceDisplay.textContent = 'Selecione uma rota';
        return;
    }

    const distance = routesData.getDistance(routeId);
    if (distance) {
        distanceDisplay.textContent = `${distance} km`;
    }
}

/**
 * Exibe o resultado do cálculo
 * @param {object} data - Objeto com dados da rota, transporte e emissão
 */
function displayResult(data) {
    const resultContainer = document.getElementById('resultContainer');
    const resultRoute = document.getElementById('resultRoute');
    const resultDistance = document.getElementById('resultDistance');
    const resultTransport = document.getElementById('resultTransport');
    const resultEmission = document.getElementById('resultEmission');
    const comparisonContainer = document.getElementById('comparisonContainer');

    // Preenche os campos de resultado
    resultRoute.textContent = data.routeName;
    resultDistance.textContent = `${data.distance} km`;
    resultTransport.textContent = emissionConfig.getTransportName(data.transport);
    resultEmission.textContent = formatEmission(data.emission.kilograms);

    // Limpa a lista de comparação
    comparisonContainer.innerHTML = '';

    // Adiciona o impacto ambiental
    const comparison = calculateComparison(data.distance);

    comparison.forEach(item => {
        const div = document.createElement('div');
        div.className = 'comparison-item';
        
        const highlight = item.transport === data.transport ? ' (selecionado)' : '';
        
        div.innerHTML = `
            <span class="transport-name">${item.name}${highlight}</span>
            <span class="emission-value">${formatEmission(item.kilograms)}</span>
        `;
        
        if (item.transport === data.transport) {
            div.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            div.style.borderLeft = '3px solid var(--secondary-color)';
            div.style.paddingLeft = '12px';
        }
        
        comparisonContainer.appendChild(div);
    });

    // Mostra o container de resultado
    resultContainer.classList.remove('hidden');

    // Scroll para o resultado
    setTimeout(() => {
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Mostra uma mensagem de erro
 * @param {string} message - Mensagem de erro
 */
function showError(message) {
    alert(`⚠️ Erro: ${message}`);
}

/**
 * Limpa a exibição de resultado
 */
function clearResult() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.add('hidden');
}

/**
 * Valida o formulário
 * @returns {object} Objeto com route e transport selecionados ou erro
 */
function validateForm() {
    const routeSelect = document.getElementById('routeSelect');
    const transportSelect = document.getElementById('transportSelect');

    const route = routeSelect.value;
    const transport = transportSelect.value;

    if (!route) {
        showError('Por favor, selecione uma rota.');
        return null;
    }

    if (!transport) {
        showError('Por favor, selecione um meio de transporte.');
        return null;
    }

    return { route, transport };
}

/**
 * Desabilita o botão de calcular (útil durante processamento)
 * @param {boolean} disabled - Se true, desabilita; se false, habilita
 */
function setCalculateButtonDisabled(disabled) {
    const button = document.querySelector('.btn-calculate');
    if (button) {
        button.disabled = disabled;
        button.textContent = disabled ? 'Calculando...' : 'Calcular Emissão';
    }
}