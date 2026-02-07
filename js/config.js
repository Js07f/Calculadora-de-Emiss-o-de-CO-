// Objeto global com constantes de emissão de CO₂ por km
// Valores em gramas de CO₂ por quilômetro
const emissionConfig = {
    transports: {
        carro: {
            name: 'Carro',
            emoji: '🚗',
            co2PerKm: 192 // gramas de CO₂ por km
        },
        onibus: {
            name: 'Ônibus',
            emoji: '🚌',
            co2PerKm: 89 // gramas de CO₂ por km (compartilhado por ~40 pessoas)
        },
        aviao: {
            name: 'Avião',
            emoji: '✈️',
            co2PerKm: 255 // gramas de CO₂ por km (por passageiro)
        },
        bicicleta: {
            name: 'Bicicleta',
            emoji: '🚴',
            co2PerKm: 0 // sem emissões diretas
        }
    },

    /**
     * Obtém as informações de emissão de um transporte
     * @param {string} transportType - Tipo de transporte (carro, onibus, aviao, bicicleta)
     * @returns {object} Objeto com informações do transporte ou null
     */
    getтранспортInfo: function(transportType) {
        return this.transports[transportType] || null;
    },

    /**
     * Obtém a emissão de CO₂ por km de um transporte
     * @param {string} transportType - Tipo de transporte
     * @returns {number} Emissão em gramas de CO₂ por km
     */
    getCO2PerKm: function(transportType) {
        const transport = this.transports[transportType];
        return transport ? transport.co2PerKm : 0;
    },

    /**
     * Obtém o nome legível do transporte
     * @param {string} transportType - Tipo de transporte
     * @returns {string} Nome do transporte
     */
    getTransportName: function(transportType) {
        const transport = this.transports[transportType];
        return transport ? `${transport.emoji} ${transport.name}` : 'Desconhecido';
    },

    /**
     * Retorna todos os tipos de transporte disponíveis
     * @returns {array} Array com os IDs dos transportes
     */
    getAllTransports: function() {
        return Object.keys(this.transports);
    }
};