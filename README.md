# jogosdehoje Landing Page

Landing page estatica em GitHub Pages para apoiar a keyword `jogosdehoje` e encaminhar usuarios para a cobertura principal em [jogosdehoje.eu.com](https://jogosdehoje.eu.com/).

## O que foi ajustado

- Conteudo em pt-BR, com foco na busca `jogosdehoje`
- Hero mais forte, visual de matchday e CTA direto
- `robots.txt`, `sitemap.xml`, `404.html`, `site.webmanifest` e `favicon.svg`
- `redirect.html` com redirecionamento suave e `noindex`
- Estrutura pronta para publicar no GitHub Pages sem build

## Estrutura

```text
football-score/
├── index.html
├── redirect.html
├── 404.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.svg
└── README.md
```

## Publicacao no GitHub Pages

Fluxo alinhado com a documentacao oficial do GitHub Pages:

1. Envie os arquivos para a branch `main`
2. Abra `Settings > Pages`
3. Em `Build and deployment`, escolha `Deploy from a branch`
4. Selecione a branch `main`
5. Selecione a pasta `/(root)`
6. Clique em `Save`

URL atual esperada para este repositorio:

`https://kaouiwyhauaysadalaouwytayta-lgtm.github.io/football-score/`

## Importante sobre "github.io" na raiz

Se voce quiser publicar sem o sufixo `/football-score/`, o repositorio precisa se chamar:

`kaouiwyhauaysadalaouwytayta-lgtm.github.io`

Enquanto o repositorio continuar com o nome `football-score`, o site sera publicado como projeto, com subpasta.

## Desenvolvimento local

Sem build obrigatorio. Duas opcoes simples:

```bash
python3 -m http.server 4173
```

ou

```bash
npm install
npm run dev
```

## Observacoes

- `redirect.html` usa `noindex,follow` para nao virar a pagina principal de busca
- `sitemap.xml` e `robots.txt` apontam para a URL atual do projeto no GitHub Pages
- Se futuramente o repositorio for renomeado ou receber dominio proprio, atualize `canonical`, `robots.txt` e `sitemap.xml`

## 许可证

MIT License

---

# Tiếng Việt

## Tính năng

- ✅ Quản lý liên kết ngoài
- ✅ Chức năng chuyển hướng tự động
- ✅ Cấu trúc trang thân thiện với SEO
- ✅ Thiết kế responsive
- ✅ Giao diện UI hiện đại

## Cấu trúc Dự án

```
github-seo-1/
├── index.html          # Trang chủ
├── redirect.html       # Trang chuyển hướng
├── styles.css          # File CSS
├── script.js           # Chức năng JavaScript
└── README.md           # Tài liệu dự án
```

## Cấu hình Liên kết Ngoài

### Phương pháp 1: Liên kết Trực tiếp

Sử dụng thẻ `<a>` trong HTML để liên kết trực tiếp đến trang web bên ngoài:

```html
<a href="https://jogosdehoje.eu.com/" 
   target="_blank" 
   rel="noopener noreferrer">
    Đi đến Trang Web Ngoài
</a>
```

### Phương pháp 2: Chuyển hướng JavaScript

Sử dụng JavaScript để chuyển hướng:

```javascript
window.location.href = 'https://jogosdehoje.eu.com/';
```

### Phương pháp 3: Chuyển hướng Meta Tag

Sử dụng thẻ meta refresh trong `<head>`:

```html
<meta http-equiv="refresh" content="3;url=https://jogosdehoje.eu.com/">
```

## Triển khai lên GitHub Pages

1. Đẩy code lên kho lưu trữ GitHub
2. Vào Settings của kho lưu trữ > Pages
3. Chọn nhánh và thư mục (thường là nhánh `main` `/root`)
4. Lưu, và GitHub Pages sẽ tự động triển khai

URL truy cập: `https://yourusername.github.io/github-seo-1/`

## Thông tin Liên kết Ngoài

Liên kết ngoài hiện đang được cấu hình:
- **Trang Web Đích**: https://jogosdehoje.eu.com/
- **Phương thức Liên kết**: 
  - Liên kết trực tiếp (index.html)
  - Chuyển hướng tự động (redirect.html)

## Phát triển Cục bộ

Chỉ cần mở `index.html` trong trình duyệt để xem kết quả, không cần máy chủ.

## Lưu ý Quan trọng

1. Khi sử dụng `target="_blank"`, nên thêm `rel="noopener noreferrer"` để đảm bảo bảo mật
2. Chuyển hướng có thể ảnh hưởng đến SEO, sử dụng cẩn thận
3. Đảm bảo các liên kết ngoài là hợp pháp

## Giấy phép

MIT License
