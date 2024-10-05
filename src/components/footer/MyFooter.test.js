import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThemeContextProvider } from '../../context/Theme'
import { MyFooter } from './MyFooter'

describe('Test Footer', () => {
    it('should render correctly', () => {
        const { getByText } = render(
            <ThemeContextProvider>
                <MyFooter />
            </ThemeContextProvider>
        )

        const content = getByText('© Epibooks 2024 by MG')
        expect(content).toBeInTheDocument()
    })
})
