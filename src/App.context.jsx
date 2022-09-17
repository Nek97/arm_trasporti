import React from "react"
import autoBind from "react-autobind"
import { Vocabulary, GetLanguages } from "./components/languages/Vocabulary"

/** @instance @type {AppContext} */
export const AppCtxStore = React.createContext({})

export const user = {
    id: 0
}

export default class AppContext extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this);

        let languageCode = localStorage.getItem("language");

        if (languageCode === null || languageCode === '') {
            // languageCode = "en_GB"
            languageCode = "it_IT"
        }

        this.state = {
            languageCode: languageCode,
            vocabulary: Vocabulary(languageCode),
            languages: GetLanguages()
        }
    }

    /**
     * Actions
     * @param {*} languageCode 
     */
    async setLanguage(languageCode) {
        await this.setState({
            languageCode: languageCode,
            vocabulary: Vocabulary(languageCode)
        })

    }

    getLanguageCode() {
        return this.state.languageCode ? this.state.languageCode : 'en_GB';
    }

    getVocabulary() {
        return this.state.vocabulary ? this.state.vocabulary : Vocabulary('en_GB');
    }

    getLanguages() {
        return this.state.languages ? this.state.languages : null
    }

    render() {
        return <AppCtxStore.Provider value={this}>
            <AppCtxStore.Consumer>
                {context => this.props.children(context)}
            </AppCtxStore.Consumer>
        </AppCtxStore.Provider>
    }
}
