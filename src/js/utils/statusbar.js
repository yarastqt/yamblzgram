class StatusBarService {
    registerListeners() {
        if (device.platform === 'iOS') {
            window.addEventListener('statusTap', this.handleTapStatusBar)
        }
    }

    handleTapStatusBar() {
        let scrollCount = null
        let prevTS = performance.now()
        const content = document.getElementById('content')
        const cosParameter = content.scrollTop / 2

        const scroll = (nextTS) => {
            scrollCount += Math.PI / (400 / (nextTS - prevTS))

            if (scrollCount >= Math.PI) {
                content.scrollTop = 0
            }

            if (content.scrollTop !== 0) {
                content.scrollTop = Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
                prevTS = nextTS
                requestAnimationFrame(scroll)
            }
        }

        requestAnimationFrame(scroll)
    }

    applyDefaultStatusBarSettings() {
        this.registerListeners()

        if (window.StatusBar) {
            if (device.platform === 'iOS') {
                StatusBar.styleDefault()
                StatusBar.overlaysWebView(false)
                StatusBar.backgroundColorByHexString('#fafafa')
            }

            if (device.platform === 'Android') {
                StatusBar.backgroundColorByHexString('#b2b2b2')
            }
        }
    }

    showStatusBar() {
        StatusBar.show()
    }    

    hideStatusBar() {
        StatusBar.hide()
    }
}

export default new StatusBarService()
