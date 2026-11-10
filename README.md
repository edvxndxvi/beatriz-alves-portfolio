# Portfólio — Beatriz Alves

Site de portfólio desenvolvido para a **Beatriz Alves**, designer gráfica e diretora de arte. Transforma o layout criado por ela no Figma em um site fiel ao design, rápido e leve, que apresenta sua trajetória, seus serviços e 11 cases de identidade visual, campanhas e peças de eventos.

## O projeto

- **Home** com apresentação, faixa animada, serviços e as pastas de projetos.
- **11 páginas de case**, cada uma com sua própria composição de imagens e tipografia, para respeitar a identidade de cada marca.
- **Compartilhamento pronto**: cada case tem imagem de pré-visualização (Open Graph) própria para LinkedIn, WhatsApp e redes sociais.
- **Totalmente estático**, sem servidor, com carregamento rápido em qualquer host.

### Cases

Corridas · Dia das Crianças · Dash · Pasta Mania · Asics Campanha · Ação de Visibilidade · Bora Encantar · Fórmula 1 · Kick-off · Vibrações Urbanas · Volta às Aulas

## Destaques técnicos

- **Fidelidade ao Figma:** layout de 1920px implementado a partir do arquivo de design, com tokens de cor e fontes por case.
- **Pipeline de imagens próprio:** script em Node com `sharp` que converte os originais exportados do Figma para WebP (até 2400px, pensando em telas retina), copia SVGs e gera um manifesto com largura e altura de cada arquivo, evitando saltos de layout.
- **Imagens de compartilhamento automáticas:** outro script gera os JPGs 1200×630 de cada case, cortando ou centralizando a imagem conforme a proporção para não perder texto.
- **Tipografia por projeto:** cada case carrega suas fontes locais (como a ASICS Font 3.0), mantendo a identidade de cada cliente.
- **Conteúdo separado do código:** textos, lista de cases e metadados ficam em `src/data`, então atualizar o portfólio não exige mexer nos componentes.
- **Componentes reutilizáveis** para cabeçalho e colagem de imagens dos cases, que mantêm as páginas consistentes e fáceis de ampliar.

## Tecnologias

Next.js (App Router, export estático) · React · TypeScript · Tailwind CSS 4 · sharp · ESLint · Prettier

## Créditos

Design e conteúdo: **Beatriz Alves**
Desenvolvimento: [**Edvan Davi**](https://github.com/edvxndxvi)

Todos os trabalhos, imagens e marcas exibidos pertencem aos seus respectivos autores e clientes.
