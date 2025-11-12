# 🍕 UAU PIZZARIA 🍕

**Nome do projeto:** UAU_PIZZARIA

---

## 👥 Integrantes e Papéis

* 👩‍💻 **Integrante 1:** Nome Completo — *Maria Vitória Ferreira Lopes* - Desenvolvedor
* 👨‍💻 **Integrante 2:** Nome Completo — *Lucas Braz* - Documentos/Readme
---

## 🎯 Tema

Criação de um site *vendável* para uma pizzaria local (Uau Pizzaria) com catálogo de produtos, página vendável, contato e informações de horário/endereço.

## 🎯 Objetivo

Planejar, prototipar, desenvolver, versionar, publicar e documentar um projeto web estático com foco em um site vendável para pequenos negócios reais, com protótipo detalhado no Figma incluindo justificativas de design.

## 💼 Justificativas do Negócio

* 🕕 Horário noturno — reforça o uso do site para atrair pedidos de última hora.
* 🌐 Presença online aumenta visibilidade e confiança dos clientes.
* 💰 Site estático (HTML + CSS) é leve, rápido e barato de manter.

---

## 🔗 Link para o Protótipo (Figma)

👉 **Protótipo detalhado:** [(https://www.figma.com/design/Elfwch9ThAEVblfzaXGGbm/Uau-Pizzaria?node-id=0-1&t=HmWvGpus6WRHgXWI-1)]

---
🖼️ Descrição detalhada do design no Figma
Paleta de cores

Cor primária (fundo / destaque): Verde claro (--primary-color: #D7E8D5) — transmite frescor e ingredientes naturais.

Cor secundária / texto: Preto (--secondary-color: #000000) — para títulos e contrastes fortes.


Tipografia

Fonte de corpo: no código há uso de Courier New (monospace) como fallback. No Figma, recomenda-se e usualmente se usa uma fonte sem-serif moderna para legibilidade em telas pequenas e grandes (ex.: Montserrat, Inter).

Fonte de destaque/títulos: uma fonte manuscrita/scripty leve é aplicada em cabeçalhos para trazer personalidade (equivalente a Monotype Corsiva no CSS).

Componentes e Layout

Header: logotipo à esquerda e menu à direita; em mobile o menu é colapsável (hamburger). O protótipo usa espaçamento generoso e um overlay escuro sobre a imagem hero para legibilidade.

Hero: imagem em largura total com CTA principal (botão) centralizado — alto impacto visual.

Cardápio / Produtos: grid responsivo de cards (2 colunas em tablet, 1 em mobile, 3 em desktop) com imagem, nome do produto, descrição curta e preço; cada card tem um botão de ação.

Sobre / Valores: seção com imagem + texto, caixas de destaque para diferenciais (ex.: massa artesanal, ingredientes frescos).

Footer: informações de contato, horário e localização.

Ícones e Imagens

Ícones: o protótipo utiliza ícones simples (linha preenchida) para telefone, localização e horário. São preferíveis SVGs vetoriais exportados do Figma para melhor controle de tamanho e cor.

Imagens: fotos de pizzas em alta resolução, recortadas e otimizadas para web (usando srcset no site para responsividade).

Interações e Microcopy

Hover states: botões e cards apresentam leve elevação (shadow) e mudança de cor no hover — aumenta percepção de interatividade.

Feedback visual: botões de "Peça" exibem mudança imediata (animation/transition de 150–200ms) para sentido de resposta.

Microcopy: frases curtas e diretas (ex.: "Peça pelo WhatsApp", "Aberto 18h–23h") para guiar ação do usuário.

Responsividade

Mobile-first: o protótipo prioriza navegação simples: CTA fixo, menu hambúrguer e grade de produtos ajustável.

Breakpoints sugeridos: 360px (mobile), 768px (tablet), 1024px (desktop). Ajustes de fonte e padding entre pontos de quebra.

Exportação e Tokens de design

No Figma, exporte as cores como tokens (HEX), tipografia com família/tamanho/peso e espaçamentos (8px grid). Exporte ícones como SVG e imagens como WebP/JPEG otimizados.

💬 Justificativas Claras de Design
✍️ Tipografia

Escolha: combinação de fonte sem serifa moderna (ex.: Montserrat ou Inter) para o corpo do texto e uma fonte manuscrita (ex.: Dancing Script) para títulos e logotipo.

Justificativa:

As fontes sem serifa oferecem alta legibilidade em telas pequenas e médias, ideais para um público que acessa pelo celular.

A fonte manuscrita nos títulos traz características artesanais, comunicando um toque humano e acolhedor, coerente com o tema de uma pizzaria artesanal.

Essa combinação cria contraste visual entre títulos e corpo, ajudando o usuário a identificar seções importantes de forma rápida.

🎨 Paleta de Cores

Escolha: base em verde claro (#D7E8D5), preto (#000000) e tons quentes (vermelho/laranja) para chamadas e botões.

Justificativa:

O verde representa ingredientes frescos e naturais, reforçando a ideia de qualidade e comida artesanal.

O preto transmite sofisticação e destaca as imagens das pizzas, que ganham protagonismo.

As cores vermelhas e alaranjadas estimulam o apetite e criam sensação de calor e proximidade — essenciais na psicologia das cores para negócios alimentícios.

A combinação mantém contraste adequado e harmonia visual, facilitando leitura e foco do usuário.

🧭 Ícones e Botões

Escolha: ícones lineares e simples (telefone, localização, horário, redes sociais) e botões grandes e contrastantes (ex.: “Peça Agora”).

Justificativa:

Os ícones facilitam reconhecimento imediato das ações sem depender de leitura, aumentando acessibilidade.

O uso de ícones universais (📞, 📍, 🕒) segue padrões de UI conhecidos, reduzindo curva de aprendizado.

Os botões seguem hierarquia visual clara, com cor de destaque e tamanho adequado para toque em dispositivos móveis, promovendo melhor usabilidade.

O posicionamento estratégico (menu fixo, CTA central no hero, botões próximos a cada card) orienta a navegação e incentiva conversão.

🧱 Layout e Usabilidade

Escolha: layout baseado em estrutura clássica e responsiva: header fixo, seção hero com imagem e CTA, grid de produtos, e rodapé informativo.

Justificativa:

Mantém o fluxo de leitura natural (de cima para baixo) e facilita o acesso rápido às informações principais.

O header fixo permite que o menu esteja sempre acessível, melhorando a navegação contínua.

O grid de produtos cria escaneabilidade — o usuário encontra o que procura rapidamente.

O uso de imagens grandes e descrições curtas reforça o apelo visual e evita poluição de informação.

Em mobile, o layout se adapta automaticamente, garantindo experiência consistente em diferentes tamanhos de tela.

🤝 Experiência do Usuário (UX)

Princípios aplicados:

Clareza: textos diretos e seções bem definidas.

Consistência: estilos repetidos de botões, cores e margens criam previsibilidade.

Feedback: hovers, transições suaves e sombras comunicam interatividade.

Acessibilidade: contraste de cores adequado, fontes legíveis e ícones descritivos.

Resultado esperado: um site fácil de navegar, visualmente agradável e que desperta desejo de consumo, alinhando estética com funcionalidade.

---

## 📁 Estrutura de Pastas e Arquivos

```
Uau_Pizzaria-main/
├─ index.html         # 🏠 Página inicial
├─ produtos.html      # 🍕 Catálogo / Cardápio
├─ sobre.html         # 🧑‍🍳 Página Sobre nos
├─ contatos.html      # 📞 Contato
├─ style.css          # 🎨 Estilos principais
└─ img/               # 🖼️ Imagens
   ├─ batata.jpeg
   ├─ carne.jpeg
   ├─ doce.jpeg
   ├─ fundo.png
   ├─ metade.jpeg
   ├─ metade_doce.jpeg
   ├─ metade_salgado.jpeg
   └─ pizza.jpeg

---

## 🧩 Etapas Realizadas (com Datas e Responsáveis)

* 🗓️ **09/10/2025** — Design do Figma — 👩‍💻 *Lucas*
* 🗓️ **11/10/2025** — Estrutura inicial (HTML/CSS) — 👨‍💻 *Maria Vitória *
* 🗓️ **15/10/2025** — Finalização — 👩‍🎨👨‍💻 *Lucas e Maria Vitória*

---
## 🎨 Justificativas de Design

### ✍️ Fontes

* Usa `Courier New` — comunica simplicidade e legibilidade.
* Alternativa `Monotype Corsiva` — dá toque artesanal.
* 💡 *Sugestão:* combinar `Montserrat` (texto) e `Dancing Script` (títulos) para equilíbrio entre modernidade e aconchego.

### 🌈 Cores

* `--primary-color: #D7E8D5` — verde claro (frescor e naturalidade)
* `--secondary-color: #000000` — preto (sofisticação e contraste)
* Fundo preto destaca imagens 🍕

### 🧭 Ícones

* ❌ Nenhuma biblioteca atual.
* 💡 Adicionar ícones SVG simples para 📍 localização, 📞 telefone e 🕒 horário.

### 🧱 Layout

* Estrutura tradicional: header, menu, seções e footer.
* 💬 Uso de imagens grandes e atraentes.
* 📱 *Melhorias:* responsividade e contraste do menu sobre imagem.

---

## 🧰 Como Rodar Localmente

1. 💾 Baixe o repositório.
2. 🌐 Abra `index.html` no navegador.

---
## Alterações
1. Revisão e Diagnóstico do projeto atual.

- O site funciona de maneira adequada nos formatos 768px e 1280px. Os botões como Início, Contato, Produtos e Sobre estão funcionando adequadamente com ações rápidas e no geral o site funciona como deveria.

- Através dos cabeçalhos, rodapés e menus em todas as páginas.

- O layout fica quebrado no formato Mobile 375px.

- Paletas de cores mais vivas e uma adaptação em diferentes telas mais dinâmica.

 2. Modularização do código HTML.

1 - O header é muito semelhante entre todas as páginas.
2 -  Se repete da mesma maneira.
3 - Não aparece em todas.
4 - Os Cards presentes têm a mesma estrutura.
5 - Ambas possuem estruturas semelhantes.

3.Implementar Reutilização
B. Usar o iframe a baixo do formulário para da mais destaques.

4.Aprimoramento de Interatividade
Novos icones de contatos(instagram, facebook e whatsapp) para o cliente poder falar mais rápido com a pizzaria.
___


## 🙌 Créditos

Projeto desenvolvido como protótipo estático em **HTML + CSS**.


