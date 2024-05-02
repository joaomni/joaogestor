document.addEventListener('DOMContentLoaded', function () {
	class CardComponent extends HTMLElement {
		constructor() {
			super()

			const shadowDOM = this.attachShadow({ mode: 'open' })
			shadowDOM.appendChild(this.build())
			shadowDOM.appendChild(this.styles())
		}

		build() {
			const componentRoot = document.createElement('article')
			componentRoot.setAttribute('class', 'card-services')

			// Imagem
			const image = document.createElement('img')
			image.src = this.getAttribute('link')
			image.alt = 'Icone Serviço'

			// Titulo
			const title = document.createElement('strong')
			title.textContent = this.getAttribute('title')

			// Descrição
			const description = document.createElement('p')
			description.textContent = this.getAttribute('description')

			componentRoot.appendChild(image)
			componentRoot.appendChild(title)
			componentRoot.appendChild(description)

			return componentRoot
		}

		styles() {
			const style = document.createElement('style')
			style.textContent = '.card-services {display: flex;flex-direction: column;justify-content: center;align-items: center;border: 1px solid var(--blue-thin);background: #ffffff;border-radius: 30px;gap: 1em;padding: 26px !important;font-size: 14px;transition: all 0.4s ease !important;width: 200px;height: 200px;}.card-services:hover {border: 1px solid var(--blue-strong);background: rgb(15,38,80);background: linear-gradient(90deg, rgba(15, 38, 80, 1) 0%, rgba(15, 38, 80, 0.81) 100%);color: #ffffff;}.card-services:hover strong {color: var(--blue-thin);}.card-services strong {color: var(--blue-strong);font-size: 1.4em;font-weight: 700 ;}';

			return style
		}
	}

	customElements.define('card-services', CardComponent)
})
