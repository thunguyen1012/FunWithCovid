import { Legend } from 'recharts';

class CustomLegend extends Legend {
  render() {
    const { payload, seriesName } = this.props;
    const Items = payload.map(({ color, name, value }) => (
      <li
        key={name}
        style={{ color: color, display: 'inline-block', marginRight: 10 }}
        className='recharts-legend-item'>
        <svg
          className='recharts-surface'
          width='14'
          height='14'
          viewBox='0 0 32 32'
          version='1.1'
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: 4,
          }}>
          <path
            stroke='none'
            fill={color}
            d='M0,4h32v24h-32z'
            className='recharts-legend-icon'></path>
        </svg>
        <p
          className='recharts-legend-item-text'
          style={{ color: color, display: 'inline-block', marginRight: 10 }}>
          {value}
        </p>
      </li>
    ));

    Items.splice(
      0,
      0,
      <li
        key={name}
        style={{ display: 'inline-block', marginRight: 10 }}
        className='recharts-legend-item'>
        <p
          className='recharts-legend-item-text'
          style={{ display: 'inline-block', marginRight: 10 }}>
          {seriesName}
        </p>
      </li>
    );
    return (
      <div>
        <ul
          className='recharts-default-legend'
          style={{ textAlign: 'center', padding: 0, margin: 0 }}>
          {Items}
        </ul>
      </div>
    );
  }
}

export default CustomLegend;
