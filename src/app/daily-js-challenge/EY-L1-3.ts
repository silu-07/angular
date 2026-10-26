export class RestrictSpecialChars {

    private restrictedChars = ['@', '<', '>'];

    @HostListener('keypress', ['$event'])

    onKeyPress(event: KeyboardEvent): void {
        if (this.restrictedChars.includes(event.key)) {
            event.preventDefault()
        }
    }

}