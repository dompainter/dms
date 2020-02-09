import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'
// import createCalculateTimeRemaining from './utils/calculate-time-remaining'
import { black, blue, red } from '../../utils/pallette'

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Time = styled.span`
  font: ${getFont({ size: 52, weight: 600 })};
  color: ${blue};
`

const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const Label = styled.span`
  font: ${getFont({ size: 24, weight: 600 })};
  color: ${red};
`

const TimeBlock = ({ value, label }) => (
  <Box>
    <Time>{value}</Time>
    <Label>{label}</Label>
  </Box>
)

TimeBlock.propTypes = {
  value: propTypes.string,
  label: propTypes.string
}

const Countdown = ({ startDate, ...htmlAttributes }) => {
  // const calculateTimeRemaining = createCalculateTimeRemaining(startDate)

  const seconds = {
    label: 'Seconds',
    value: '45'
  }
  const minutes = {
    label: 'Minutes',
    value: '27'
  }
  const days = {
    label: 'Days',
    value: '03'
  }
  const months = {
    label: 'Months',
    value: '06'
  }
  const years = {
    label: 'Years',
    value: '01'
  }

  const times = [years, months, days, minutes, seconds]

  return (
    <CountdownContainer {...htmlAttributes}>
      {times.map(({ label, value }) =>
        <TimeBlock key={label} label={label} value={value} />
      )}
    </CountdownContainer>
  )
}

Countdown.propTypes = {
  startDate: propTypes.number
}

export default Countdown
