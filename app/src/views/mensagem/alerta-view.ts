export class AlertaView {

    constructor(private element: HTMLDivElement) {}

    public render(texto: string): void {
        this.element.innerHTML = `${texto}`

        this.element.classList.add(`alerta`)

        this.element.classList.remove("inv")

        this.element.classList.add("mostrar")

        setTimeout(() => {
            this.element.innerHTML = ""
            this.element.classList.remove(`alerta`)
            this.element.classList.add("inv")
            this.element.classList.remove("mostrar")
        }, 4000)
    }
}