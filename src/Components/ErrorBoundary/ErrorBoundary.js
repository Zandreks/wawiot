import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return <div style={{
                background:'#ffff',
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                position:'relative',
                zIndex:999999999
            }}>
                <div
                    style={{
                        color:'black',
                        fontSize:24
                    }}
                >Ошибка при обработке данных пожалуйста обратитесь в техническую поддержку !! </div> </div>
        }
        return this.props.children
    }


}
