import { Subject } from 'rxjs'

class globalService {
    constructor() {
        this.commonEvent = new Subject()
        this.versionChange = '0001'
        this.language = 'VI'
        this.theme = 'dark'
        this.configInfo = {}
        this.authFlag = true
        this.userInfo = {}

        this.filterNumber = (numberstr) => {
            if (typeof numberstr === 'number') return numberstr
            else if (numberstr != null && numberstr.length > 0) {
                return Number(numberstr.replace(/\D/g, ''))
            }
        }

        this.focusInput = (id, sleep) => {
            if (sleep) {
                setTimeout(() => {
                    const ele = document.getElementById(id)
                    if (ele) ele.focus()
                }, sleep)
            } else {
                const ele = document.getElementById(id)
                if (ele) ele.focus()
            }
        }
    }
}

const theInstance = new globalService()
export default theInstance