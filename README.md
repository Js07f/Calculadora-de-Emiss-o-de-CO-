# 🌍 Calculadora de Emissão de CO₂

Uma aplicação web interativa para calcular a emissão de dióxido de carbono (CO₂) em diferentes rotas e meios de transporte.

## 📋 Descrição

Este projeto permite que usuários:
- Selecionem uma rota pré-definida entre cidades brasileiras
- Escolham um meio de transporte (carro, ônibus, avião ou bicicleta)
- Calculem automaticamente a emissão estimada de CO₂
- Vejam uma comparação de emissões entre todos os transportes

## 🚀 Recursos

- ✅ Interface limpa e responsiva
- ✅ Rotas com distâncias reais entre cidades brasileiras
- ✅ 4 meios de transporte com dados de emissão realistas
- ✅ Comparação automática entre transportes
- ✅ Design mobile-friendly
- ✅ Sem dependências externas (JavaScript puro)

## 📁 Estrutura do Projeto

```
carbon-calculator/
├── index.html              # Página principal com formulário
├── css/
│   └── style.css          # Estilos responsivos
├── js/
│   ├── app.js             # Inicialização e eventos
│   ├── calculator.js      # Lógica de cálculo
│   ├── config.js          # Constantes de emissão
│   ├── routes-data.js     # Dados de rotas
│   └── ui.js              # Manipulação do DOM
└── README.md              # Este arquivo
```

## 📊 Dados de Emissão (g CO₂/km)

| Transporte | Emissão | Emoji |
|------------|---------|-------|
| Carro      | 192 g   | 🚗   |
| Avião      | 255 g   | ✈️   |
| Ônibus     | 89 g    | 🚌   |
| Bicicleta  | 0 g     | 🚴   |

## 🛣️ Rotas Disponíveis

- São Paulo → Rio de Janeiro (430 km)
- São Paulo → Belo Horizonte (580 km)
- São Paulo → Brasília (960 km)
- Rio de Janeiro → Belo Horizonte (340 km)
- Rio de Janeiro → Salvador (1500 km)
- São Paulo → Curitiba (405 km)
- São Paulo → Santos (65 km)
- Brasília → Recife (2100 km)
- Belo Horizonte → Brasília (740 km)
- Curitiba → Rio de Janeiro (880 km)

## 🎯 Como Usar

1. **Abra o arquivo** `index.html` em seu navegador
2. **Selecione uma rota** no primeiro formulário
3. **Escolha um transporte** na lista de opções
4. **Clique em "Calcular Emissão"**
5. **Veja o resultado** com a emissão total e comparação entre transportes

## 🔧 Funções Principais

### `calculateEmission(distance, transportType)`
Calcula a emissão total de CO₂ para uma distância e transporte específicos.

```javascript
const result = calculateEmission(100, 'carro');
// Retorna: { grams: 19200, kilograms: 19.2, ... }
```

### `calculateComparison(distance)`
Calcula a emissão para todos os transportes em uma distância.

```javascript
const comparison = calculateComparison(100);
// Retorna array com emissão de cada transporte
```

### `formatEmission(kilograms)`
Formata um valor de emissão para exibição legível.

```javascript
formatEmission(0.192); // Retorna: "192 g"
formatEmission(1.92);  // Retorna: "1.92 kg"
```

## 🧪 Teste Rápido (Console)

Para testar a calculadora no console do navegador:

```javascript
// Testa primeira rota com primeiro transporte
testCalculator(0, 0);

// Mostra todas as rotas
debugRoutes();

// Mostra todas as configurações de emissão
debugEmissions();
```

## 🎨 Personalização

### Adicionar nova rota

Em `js/routes-data.js`, edite o array `routes`:

```javascript
{
    id: 'nova-rota',
    name: 'Cidade A → Cidade B',
    distance: 500
}
```

### Alterar valores de emissão

Em `js/config.js`, modifique o objeto `transports`:

```javascript
carro: {
    name: 'Carro',
    emoji: '🚗',
    co2PerKm: 200  // Seu valor aqui
}
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🌐 Compatibilidade

- Chrome/Chromium (recomendado)
- Firefox
- Safari
- Edge
- Qualquer navegador moderno com suporte a ES6

## 📝 Licença

Projeto educacional desenvolvido para a DIO (Digital Innovation One).

## 👨‍💻 Autor

Criado como projeto educacional em fevereiro de 2026.

## 💡 Melhorias Futuras

- [ ] Integração com Google Maps para distâncias reais
- [ ] Histórico de cálculos
- [ ] Exportação de resultados em PDF
- [ ] Modo dark
- [ ] Integração com banco de dados
- [ ] Múltiplas cidades base
- [ ] Análise de economia com transportes alternativos

---

**Contribua para reduzir a emissão de carbono escolhendo transportes mais sustentáveis!** 🌱