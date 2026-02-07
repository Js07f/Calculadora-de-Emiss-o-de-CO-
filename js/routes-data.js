// Objeto global com dados de rotas (distâncias em km)
const routesData = {
    routes: [
        {
            id: 'sp-rj',
            name: 'São Paulo → Rio de Janeiro',
            distance: 430
        },
        {
            id: 'sp-bh',
            name: 'São Paulo → Belo Horizonte',
            distance: 580
        },
        {
            id: 'sp-brasilia',
            name: 'São Paulo → Brasília',
            distance: 960
        },
        {
            id: 'rj-bh',
            name: 'Rio de Janeiro → Belo Horizonte',
            distance: 340
        },
        {
            id: 'rj-salvador',
            name: 'Rio de Janeiro → Salvador',
            distance: 1500
        },
        {
            id: 'sp-curitiba',
            name: 'São Paulo → Curitiba',
            distance: 405
        },
        {
            id: 'sp-santos',
            name: 'São Paulo → Santos',
            distance: 65
        },
        {
            id: 'brasilia-recife',
            name: 'Brasília → Recife',
            distance: 2100
        },
        {
            id: 'bh-brasilia',
            name: 'Belo Horizonte → Brasília',
            distance: 740
        },
        {
            id: 'curitiba-rio',
            name: 'Curitiba → Rio de Janeiro',
            distance: 880
        }
    ],

    /**
     * Obtém a distância de uma rota pelo ID
     * @param {string} routeId - ID da rota
     * @returns {number} Distância em km ou null se não encontrada
     */
    getDistance: function(routeId) {
        const route = this.routes.find(r => r.id === routeId);
        return route ? route.distance : null;
    },

    /**
     * Obtém o nome completo da rota pelo ID
     * @param {string} routeId - ID da rota
     * @returns {string} Nome da rota ou null se não encontrada
     */
    getRouteName: function(routeId) {
        const route = this.routes.find(r => r.id === routeId);
        return route ? route.name : null;
    }
};