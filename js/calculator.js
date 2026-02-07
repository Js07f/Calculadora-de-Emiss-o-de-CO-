// Funções globais para cálculo de emissão de CO₂

/**
 * Calcula a emissão total de CO₂
 * @param {number} distance - Distância em km
 * @param {string} transportType - Tipo de transporte (carro, onibus, aviao, bicicleta)
 * @returns {object} Objeto com emissão em gramas e kg
 */
function calculateEmission(distance, transportType) {
    if (!distance || distance <= 0) {
        return {
            grams: 0,
            kilograms: 0,
            error: 'Distância inválida'
        };
    }

    const co2PerKm = emissionConfig.getCO2PerKm(transportType);
    
    if (co2PerKm === undefined) {
        return {
            grams: 0,
            kilograms: 0,
            error: 'Tipo de transporte inválido'
        };
    }

    const totalGrams = distance * co2PerKm;
    const totalKilograms = (totalGrams / 1000).toFixed(2);

    return {
        grams: Math.round(totalGrams),
        kilograms: parseFloat(totalKilograms),
        distance: distance,
        transport: transportType
    };
}

/**
 * Calcula comparação de emissões entre todos os transportes
 * @param {number} distance - Distância em km
 * @returns {array} Array com objetos de comparação para cada transporte
 */
function calculateComparison(distance) {
    const transports = emissionConfig.getAllTransports();
    
    return transports.map(transport => {
        const emission = calculateEmission(distance, transport);
        return {
            transport: transport,
            name: emissionConfig.getTransportName(transport),
            kilograms: emission.kilograms,
            grams: emission.grams
        };
    }).sort((a, b) => a.grams - b.grams); // Ordena do menor para maior
}

/**
 * Formata o valor de emissão para exibição
 * @param {number} kilograms - Emissão em quilogramas
 * @returns {string} Valor formatado como string
 */
function formatEmission(kilograms) {
    if (kilograms < 1) {
        return `${Math.round(kilograms * 1000)} g`;
    }
    return `${parseFloat(kilograms).toFixed(2)} kg`;
}

/**
 * Converte emissão em referências visuais
 * @param {number} kilograms - Emissão em quilogramas
 * @returns {string} Descrição do impacto
 */
function getEmissionImpact(kilograms) {
    if (kilograms < 0.1) {
        return '🌱 Impacto mínimo';
    } else if (kilograms < 0.5) {
        return '🌿 Impacto baixo';
    } else if (kilograms < 1) {
        return '🍃 Impacto moderado';
    } else if (kilograms < 2) {
        return '⚠️ Impacto significativo';
    } else {
        return '❌ Impacto alto';
    }
}