## Beta version(WIP)

> This is a beta version of the plugin. Please report any bugs or issues you find.

## Getting started

> To display ShineOn fetures on your Product pages you need to add these files to your theme

1. Download files from folders `assets/` and `snippets/`
2. Open Theme code editor ![theme-code](https://github.com/user-attachments/assets/eec411a7-0dc3-42b5-aadf-336594aed986)
3. Search for `product` in templates folder select the one which is used for your Product page. For example, `product.liquid`
4. In the template you'll see name of section. In this case it's `product-template.liquid`![theme-files](https://github.com/user-attachments/assets/83f63a1a-ef6f-46ca-9e52-62b421470bd8)
5. Upload files from `assets/` forlder. There are `so-hyper.js` and `so-hyper.css`![theme-assets](https://github.com/user-attachments/assets/46fefbbb-9bf9-4917-a176-92ca3ff9977e)
6. Create blank file in `snippets/` folder and copy-paste there content of uploaded `snippets/so-product-info.liquid` file ![theme-snippets](https://github.com/user-attachments/assets/b6859ed9-dad9-47b4-8ae8-b8066da853a0)
7. Click **Save**
8. Then let's go back to section file. At the top of it add these lines.

```
{% assign mapbox_access_token = "" %}
{% assign trigger_selector = ADD_YOUR_SELECTOR_HERE %}
{% render 'so-product-info', product: product, shop: shop, trigger_selector: trigger_selector, mapbox_access_token: mapbox_access_token %}
<script type="text/javascript" src="{{ 'so-hyper.js' | asset_url }}" defer></script>
{{ 'so-hyper.css' | asset_url | stylesheet_tag }}
```

![theme-section](https://github.com/user-attachments/assets/207b6f8e-26d3-4abb-b091-c47a6c6761a5) 9. Replace `ADD_YOUR_SELECTOR_HERE` with the class name of the section you want to trigger the app. It's a class or id of the section with variant selection. It might be a radio box or a dropdown. ![choose-selector](https://github.com/user-attachments/assets/e4621e06-406c-4cb2-8e67-53b092e85801) 10. For example in this case it's `.product-form__controls-group select`![choose-selector-replace](https://github.com/user-attachments/assets/a06c630b-d562-4893-b3a6-9f280d7f343f)

10. Click **Save**

### Placing the app block to the page

1. Choose the place where the app should be. As an example I want to place it right above quantity section so I need to get class name of the section.![get-class](https://github.com/user-attachments/assets/5cd29409-2cf3-4957-9e66-d0d56f4d6222)
2. Go to theme code editor to the file for product page, find the class and paste `<div id="so-hyper"></div>` there.![place-app](https://github.com/user-attachments/assets/4a5b0300-9cf9-429b-a655-d06b53dc4383)
3. Click **Save**
   ![check-inputs](https://github.com/user-attachments/assets/9d80b7d7-e278-419d-9ced-38b4903f8ceb)
