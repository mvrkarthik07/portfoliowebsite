import { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary-black px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="font-gothic text-4xl md:text-6xl mb-6">Oops!</h1>
            <p className="font-clash text-lg md:text-xl text-secondary-white mb-8">
              Something went wrong. Don't worry, this happens sometimes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="btn-primary text-center"
              >
                Go Home
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="btn-secondary"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

