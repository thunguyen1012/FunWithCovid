import { Tooltip } from 'recharts';

class CustomTooltip extends Tooltip {
  render() {
    const { active, payload, label } = this.props;

    if (active) {
      const seriesName = payload[0].payload.seriesName;
      const labelContent = seriesName ? `${seriesName} (${label})` : label;
      const Items = payload.map(({ color, name, value }) => (
        <p key={name} style={{ color: color, padding: 0, margin: 0 }}>
          {name} : {value}
        </p>
      ));
      return (
        <div
          className='recharts-default-tooltip'
          style={{ background: 'white', border: '1px solid', padding: 5 }}>
          <p
            className='recharts-tooltip-label'
            style={{ padding: 0, margin: 0 }}>
            {labelContent}
          </p>
          {Items}
        </div>
      );
    }

    return null;
  }
}

export default CustomTooltip;
