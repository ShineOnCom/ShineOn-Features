## Getting started
> To display ShineOn fetures on your Product pages you need to add these files to your theme

1. Download files from folders `assets/` and `snippets/`
2. Open Theme code editor ![theme-code](https://github.com/user-attachments/assets/eec411a7-0dc3-42b5-aadf-336594aed986)
3. Search for `product` in templates folder select the one which is used for your Product page. For example, `product.liquid`
4. In the template you'll see name of section. In this case it's `product-template.liquid`![theme-files](https://github.com/user-attachments/assets/83f63a1a-ef6f-46ca-9e52-62b421470bd8)
5. Upload files from `assets/` forlder. There are `so-hyper.js` and `so-hyper.css`![theme-assets](https://github.com/user-attachments/assets/46fefbbb-9bf9-4917-a176-92ca3ff9977e)
6. Create blank file in `snippets/` folder and copy-paste there content of uploaded `snippets/so-product-info.liquid` file ![theme-snippets](https://github.com/user-attachments/assets/b6859ed9-dad9-47b4-8ae8-b8066da853a0)
7. Click **Save**
8. Then let's go back to section file. At the top of it add these lines
```
{% render 'so-product-info', product: product, shop: shop %}
<script type="text/javascript" src="{{ 'so-hyper.js' | asset_url }}" defer></script>
{{ 'so-hyper.css' | asset_url | stylesheet_tag }}
```
![theme-section](https://github.com/user-attachments/assets/207b6f8e-26d3-4abb-b091-c47a6c6761a5)
9. Then place app block to the page
