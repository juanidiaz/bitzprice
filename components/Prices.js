class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    function printData(data, currency) {
      return (
        <li className="list-group-item">
          Bitcoin rate for {data[currency].description}
          : <span className="badge badge-primary">
            {data[currency].code}
          </span>
          <strong> {data[currency].rate}</strong>
        </li>
      );
    }

    return (
      <div>
        <ul className="list-group">
          {printData(this.props.bpi, this.state.currency)}
        </ul>
        <br />
        <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
          <option value="USD">US Dollar</option>
          <option value="GBP">British Pound</option>
          <option value="EUR">Euro</option>
        </select>
      </div>
    )
  }
}

export default Prices;