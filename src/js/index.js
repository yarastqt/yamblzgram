import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { AppContainer } from 'react-hot-loader'

import StatusBarService from 'utils/statusbar'
import PlatformService from 'utils/platform'
import { globalStyles, lightTheme } from 'styles'
import Application from 'components/Application'

function renderApplication(Component) {
    render(
        <AppContainer>
            <ThemeProvider theme={ lightTheme }>
                <Application />
            </ThemeProvider>
        </AppContainer>,
        document.getElementById('react-root')
    )
}

function onDeviceReady() {
    injectGlobal`${globalStyles}`
    PlatformService.applyDefaultIOSSettings()
    StatusBarService.applyDefaultStatusBarSettings()
    renderApplication(Application)

    if (module.hot) {
        module.hot.accept('components/Application', () => {
            const nextApplication = require('components/Application').default
            renderApplication(nextApplication)
        })
    }
}

document.addEventListener('deviceready', onDeviceReady)
