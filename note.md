# Notas de Desenvolvimento - Playground QR Code

## Implementado
- [x] Autoajuste dinâmico da margem do logo (`MAX_LOGO_MARGIN` baseado em `logoSize` < 40% vs = 40%).
- [x] Timeout de debounce (100ms) para melhorar performance ao digitar textos/URLs extensos.
- [x] Gerenciamento eficiente de memória com `URL.revokeObjectURL()` ao alterar/remover logos.
- [x] Botão dedicado "Remover Logo" com restauração automática do nível de correção de erro.
- [x] Personalização independente do formato dos cantos (olhos/finders).
- [x] Ações de copiar para a área de transferência (PNG e SVG) com toast de feedback visual.
- [x] Sincronização bidirecional entre Color Picker e campos Hexadecimais.
- [x] Docstrings completas em formato JSDoc em todas as constantes e funções.

## Testar
- [ ] **Copiar PNG e SVG**: Validar compatibilidade em navegadores diferentes e contextos locais (`localhost`, `file://` e rede local).

## Sugestões Futuras

### 🎨 Design & Personalização
- [ ] **Seletor de Cores HEX**: Suporte a 3 dígitos (`#fff` → `#ffffff`).
- [ ] **Fundo Transparente**: Opção para exportar com fundo transparente (canal alfa).
- [ ] **Inversor Rápido de Cores**: Botão para alternar instantaneamente as cores de módulos e fundo.
- [ ] **Gradientes de Cores**: Suporte a gradientes lineares e radiais nos módulos e cantos.
- [ ] **Validador de Contraste e Legibilidade (WCAG)**: Alerta automático quando o contraste entre cor e fundo for insuficiente para leitura por câmeras.
- [ ] **Resolução de Exportação Customizável**: Seletor de resolução para download (ex: 256px, 1024px, 4096px para impressão gráfica).

### 📦 Geradores de Conteúdo Especializado (Presets)
- [ ] **PIX Estático (Copia e Cola)**: Gerador com cálculo de payload EMVCo e CRC16 (Chave, Nome, Cidade e Valor opcional).
- [ ] **Conexão Wi-Fi**: Formulário com SSID, Tipo de Criptografia (WPA/WEP/Aberta) e Senha (`WIFI:S:...;T:...;P:...;;`).
- [ ] **WhatsApp Direto**: Link direto com número e mensagem pré-formatada.
- [ ] **Cartão de Contato (vCard)**: Exportação de contato telefônico e e-mail escaneável.

### ⚡ Produtividade & Utilidades
- [ ] **Leitor / Scanner Integrado**: Arrastar e soltar uma imagem de QR Code para decodificar e carregar os dados no editor.
- [ ] **Histórico Local**: Salvar últimos 5 QR Codes gerados no `localStorage`.
- [ ] **Geração em Lote (Batch Generator)**: Inserir múltiplas linhas de URLs/textos e baixar um `.zip` com todos os QR Codes.

### 🌐 Otimização & SEO (Para Futura Publicação Web)
- [ ] **Meta Tags de SEO**: `title`, `meta description`, `canonical` e `keywords` estruturadas.
- [ ] **Open Graph & Twitter Cards**: Tags `og:title`, `og:description`, `og:image` para compartilhamento rico em redes sociais.
- [ ] **PWA / Web App Manifest**: `manifest.json`, ícone `favicon.svg` e suporte a instalação como aplicativo offline.
- [ ] **Dados Estruturados (Schema.org)**: Marcação `WebApplication` ou `SoftwareApplication` para motores de busca.
