class PlatformService {
    applyDefaultIOSSettings() {
        if (device.platform === 'iOS') {
            /**
             * touchstart событие необходимо для того, чтобы на IOS устройствах
             * в css срабатывало active состояние
             */
            document.addEventListener('touchstart', () => {})
        }
    }
}

export default new PlatformService()
