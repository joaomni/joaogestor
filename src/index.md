---
title: Clínica Odontológica
layout: base.njk
instagram: https://www.instagram.com/
facebook: https://www.facebook.com/
whatsapp: https://api.whatsapp.com/send?phone=5513991027026&text=Ol%C3%A1!
---

{% include "header.njk" %}
{% include "home.njk" %}
{% include "services.njk" %}
{% include "about.njk" %}
  <div class="c-count-card">
    {% for analytic in analytics -%}
    <div class="count-card">
      <h1>{{ analytic.amount }}+</h1>
      <p>{{ analytic.title }}</p>
    </div>
    {%- endfor %}
  </div>
{% include "experts.njk" %}
{% include "faq.njk" %}
{% include "statement.njk" %}