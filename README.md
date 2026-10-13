# Gerador de QR Code Profissional

[![Release](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/oMatheus13/playground-qrcode/releases)
[![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> [!NOTE]
> **Status da Versão Open Source:** Esta versão marca a entrega estável e final (**v1.0.0**) do Playground QR Code em código aberto. O projeto está completo, autocontido e funcional para uso livre sob os termos da licença MIT. Novas iterações e versões avançadas serão conduzidas em uma solução independente.

## 📜 Sobre o Projeto

O **Gerador de QR Code Profissional** é uma ferramenta web _all-in-one_ criada para a geração rápida e altamente personalizável de QR Codes. Desenvolvido para atender tanto necessidades digitais quanto de **produção gráfica e profissional**, o playground oferece controle técnico granular sobre dimensões, margens, formatos e exportação vetorial de alta qualidade.

O projeto é contido em um único arquivo `index.html`, tornando-o extremamente portátil, rápido e funcional 100% offline, sem necessidade de servidores web.

---

## ✨ Funcionalidades

- **Interface Compacta e Moderna:** Layout dark mode em grade de 2 colunas com pré-visualização em tempo real e sem necessidade de rolagem de página.
- **Controle Granular e Técnico:**
  - **Conteúdo Dinâmico:** Suporta qualquer texto, link ou payload com atualização via *debounce* (100ms) para máxima fluidez.
  - **Margem Externa em Módulos:** Defina com exatidão a "zona de silêncio" em múltiplos de módulos (cada módulo = 8px).
  - **Formato dos Módulos:** Opções para módulos *Quadrados*, *Pontos*, *Arredondados*, *Classy Arredondados* e *Extra Arredondados*.
  - **Formato dos Cantos (Olhos):** Personalização independente dos três cantos do código (*Quadrado*, *Ponto*, *Extra Arredondado*).
  - **Sincronização de Cores:** Seletores de cor visuais sincronizados bidirecionalmente com campos de código hexadecimal.
- **Qualidade de Produção & Logos:**
  - **Correção de Erro (ECC):** Níveis L, M, Q e H com seleção automática de segurança máxima (H) ao anexar imagens.
  - **Suporte a Logo Central:** Upload de logos (PNG, JPG, SVG) com slider de proporção e botão de remoção rápida.
  - **Autoajuste de Margem do Logo:** Limites automáticos inteligentes baseados no tamanho do logo (máximo de 1 módulo para < 40% e até 3 módulos para 40%).
  - **Gerenciamento de Memória:** Liberação automática de URLs de objetos (`URL.revokeObjectURL`) para evitar vazamentos de memória.
- **Exportação & Produtividade:**
  - **Baixar PNG:** Exportação raster para uso digital imediato.
  - **Baixar SVG:** Exportação vetorial pura, ideal para gráfica e corte sem perda de nitidez.
  - **Copiar PNG:** Copia a imagem diretamente para a área de transferência do sistema operacional.
  - **Copiar SVG:** Copia o código vetorial em texto com um clique.
  - **Toast de Notificação:** Feedback visual flutuante para confirmação de ações de cópia e reset.
  - **Download Offline:** Botão para salvar uma cópia completa da ferramenta no disco para uso local.
- **Feedback em Tempo Real:** Caixa de informações técnica exibindo quantidade exata de módulos (ex: `29x29`) e dimensão final calculada em pixels.

---

## 🚀 Como Usar

Por ser uma aplicação autocontida em arquivo único:

1. **Abra o arquivo:** Dê um duplo clique no arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Opera, etc.).
2. **Personalize:** Digite seu link/texto, escolha as cores, formato e adicione um logo se desejar.
3. **Exporte:** Baixe em PNG/SVG ou copie direto para sua área de transferência.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Design responsivo com CSS Variables, Grid e Flexbox.
- **JavaScript (ES6+):** Código limpo, componentizado, com JSDoc docstrings e integração com a biblioteca `qr-code-styling`.

---

## 🎯 Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
