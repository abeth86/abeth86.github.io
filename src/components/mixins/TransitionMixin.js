export const TransitionMixin = {
  componentDidMount: function () {
    setTimeout(() => {
      this.props.startTransition(true)
    }, 100)
  },
  componentWillUnmount: function () {
    this.props.startTransition(false)
  }
}
