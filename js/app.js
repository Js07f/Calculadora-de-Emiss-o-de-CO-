// Inicialização e eventos da aplicação

/**
 * Inicializa a aplicação
 */
function initializeApp() {
    // Carrega as rotas no select
    updateRoutesSelect();

    // Configura listener para mudança de rota
    const routeSelect = document.getElementById('routeSelect');
    routeSelect.addEventListener('change', function(e) {
        updateDistanceDisplay(e.target.value);
    });

    // Configura listener para o formulário
    const calculatorForm = document.getElementById('calculatorForm');
    calculatorForm.addEventListener('submit', handleFormSubmit);

    console.log('✅ Aplicação inicializada com sucesso!');
}

/**
 * Manipulador do envio do formulário
 * @param {Event} event - Evento de submit
 */
function handleFormSubmit(event) {
    event.preventDefault();

    // Valida o formulário
    const formData = validateForm();
    if (!formData) return;

    // Obtém os dados
    const routeId = formData.route;
    const transportType = formData.transport;
    
    const distance = routesData.getDistance(routeId);
    const routeName = routesData.getRouteName(routeId);

    // Calcula a emissão
    const emission = calculateEmission(distance, transportType);

    if (emission.error) {
        showError(emission.error);
        return;
    }

    // Prepara dados para exibição
    const resultData = {
        routeName: routeName,
        distance: distance,
        transport: transportType,
        emission: emission
    };

    // Exibe o resultado
    displayResult(resultData);

    // Log para fins de DEBUG
    console.log('📊 Cálculo realizado:', resultData);
}

/**
 * Função auxiliar para debugging - exibe todas as rotas no console
 */
function debugRoutes() {
    console.log('📍 Rotas disponíveis:');
    routesData.routes.forEach(route => {
        console.log(`   ${route.name}: ${route.distance} km`);
    });
}

/**
 * Função auxiliar para debugging - exibe todas as configurações de emissão
 */
function debugEmissions() {
    console.log('💨 Configuração de emissões (g/km):');
    emissionConfig.getAllTransports().forEach(transport => {
        const co2 = emissionConfig.getCO2PerKm(transport);
        const name = emissionConfig.getTransportName(transport);
        console.log(`   ${name}: ${co2} g/km`);
    });
}

// Inicia a aplicação quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Função para facilitar testes no console
window.testCalculator = function(routeIndex = 0, transportIndex = 0) {
    const routes = routesData.routes;
    const transports = emissionConfig.getAllTransports();

    if (routeIndex >= routes.length || transportIndex >= transports.length) {
        console.error('❌ Índices inválidos');
        return;
    }

    const route = routes[routeIndex];
    const transport = transports[transportIndex];

    console.log(`🧪 Testando: ${route.name} com ${emissionConfig.getTransportName(transport)}`);

    const emission = calculateEmission(route.distance, transport);
    console.log(`   Resultado: ${formatEmission(emission.kilograms)}`);
};