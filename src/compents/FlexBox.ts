'use strict'
import * as React from 'react'
interface GridProps { 
  fluid?: boolean 
}

const GridPropsMap: {[propNames: string]: string} = { 
  fluid: 'container-fluid' 
}

interface RowProps {
  start_xs?: boolean
  center_xs?: boolean
  end_xs?: boolean
  top_xs?: boolean
  middle_xs?: boolean
  bottom_xs?: boolean
  around_xs?: boolean
  between_xs?: boolean
  start_sm?: boolean
  center_sm?: boolean
  end_sm?: boolean
  top_sm?: boolean
  middle_sm?: boolean
  bottom_sm?: boolean
  around_sm?: boolean
  between_sm?: boolean
  start_md?: boolean
  center_md?: boolean
  end_md?: boolean
  top_md?: boolean
  middle_md?: boolean
  bottom_md?: boolean
  around_md?: boolean
  between_md?: boolean
  start_lg?: boolean
  center_lg?: boolean
  end_lg?: boolean
  top_lg?: boolean
  middle_lg?: boolean
  bottom_lg?: boolean
  around_lg?: boolean
  between_lg?: boolean
  reverse?: boolean
}
const RowPropsMap: {[propNames: string]: string} = {
  start_xs: 'start-xs' ,
  center_xs: 'center-xs' ,
  end_xs: 'end-xs' ,
  top_xs: 'top-xs' ,
  middle_xs: 'middle-xs' ,
  bottom_xs: 'bottom-xs' ,
  around_xs: 'around-xs' ,
  between_xs: 'between-xs' ,
  start_sm: 'start-sm' ,
  center_sm: 'center-sm' ,
  end_sm: 'end-sm' ,
  top_sm: 'top-sm' ,
  middle_sm: 'middle-sm' ,
  bottom_sm: 'bottom-sm' ,
  around_sm: 'around-sm' ,
  between_sm: 'between-sm' ,
  start_md: 'start-md' ,
  center_md: 'center-md' ,
  end_md: 'end-md' ,
  top_md: 'top-md' ,
  middle_md: 'middle-md' ,
  bottom_md: 'bottom-md' ,
  around_md: 'around-md' ,
  between_md: 'between-md' ,
  start_lg: 'start-lg' ,
  center_lg: 'center-lg' ,
  end_lg: 'end-lg' ,
  top_lg: 'top-lg' ,
  middle_lg: 'middle-lg' ,
  bottom_lg: 'bottom-lg' ,
  around_lg: 'around-lg' ,
  between_lg: 'between-lg' ,
  reverse: 'reverse'
}
interface ColProps {
  xs?: boolean
  xs_1?: boolean
  xs_offset_1?: boolean
  xs_2?: boolean
  xs_offset_2?: boolean
  xs_3?: boolean
  xs_offset_3?: boolean
  xs_4?: boolean
  xs_offset_4?: boolean
  xs_5?: boolean
  xs_offset_5?: boolean
  xs_6?: boolean
  xs_offset_6?: boolean
  xs_7?: boolean
  xs_offset_7?: boolean
  xs_8?: boolean
  xs_offset_8?: boolean
  xs_9?: boolean
  xs_offset_9?: boolean
  xs_10?: boolean
  xs_offset_10?: boolean
  xs_11?: boolean
  xs_offset_11?: boolean
  xs_12?: boolean
  xs_offset_12?: boolean
  first_xs?: boolean
  last_xs?: boolean
  sm?: boolean
  sm_1?: boolean
  sm_offset_1?: boolean
  sm_2?: boolean
  sm_offset_2?: boolean
  sm_3?: boolean
  sm_offset_3?: boolean
  sm_4?: boolean
  sm_offset_4?: boolean
  sm_5?: boolean
  sm_offset_5?: boolean
  sm_6?: boolean
  sm_offset_6?: boolean
  sm_7?: boolean
  sm_offset_7?: boolean
  sm_8?: boolean
  sm_offset_8?: boolean
  sm_9?: boolean
  sm_offset_9?: boolean
  sm_10?: boolean
  sm_offset_10?: boolean
  sm_11?: boolean
  sm_offset_11?: boolean
  sm_12?: boolean
  sm_offset_12?: boolean
  first_sm?: boolean
  last_sm?: boolean
  md?: boolean
  md_1?: boolean
  md_offset_1?: boolean
  md_2?: boolean
  md_offset_2?: boolean
  md_3?: boolean
  md_offset_3?: boolean
  md_4?: boolean
  md_offset_4?: boolean
  md_5?: boolean
  md_offset_5?: boolean
  md_6?: boolean
  md_offset_6?: boolean
  md_7?: boolean
  md_offset_7?: boolean
  md_8?: boolean
  md_offset_8?: boolean
  md_9?: boolean
  md_offset_9?: boolean
  md_10?: boolean
  md_offset_10?: boolean
  md_11?: boolean
  md_offset_11?: boolean
  md_12?: boolean
  md_offset_12?: boolean
  first_md?: boolean
  last_md?: boolean
  lg?: boolean
  lg_1?: boolean
  lg_offset_1?: boolean
  lg_2?: boolean
  lg_offset_2?: boolean
  lg_3?: boolean
  lg_offset_3?: boolean
  lg_4?: boolean
  lg_offset_4?: boolean
  lg_5?: boolean
  lg_offset_5?: boolean
  lg_6?: boolean
  lg_offset_6?: boolean
  lg_7?: boolean
  lg_offset_7?: boolean
  lg_8?: boolean
  lg_offset_8?: boolean
  lg_9?: boolean
  lg_offset_9?: boolean
  lg_10?: boolean
  lg_offset_10?: boolean
  lg_11?: boolean
  lg_offset_11?: boolean
  lg_12?: boolean
  lg_offset_12?: boolean
  first_lg?: boolean
  last_lg?: boolean
  reverse?: boolean
}
const ColPropsMap: {[propNames: string]: string} = {
  xs: 'col-xs' ,
  xs_1: 'col-xs-1' ,
  xs_offset_1: 'col-xs-offset-1' ,
  xs_2: 'col-xs-2' ,
  xs_offset_2: 'col-xs-offset-2' ,
  xs_3: 'col-xs-3' ,
  xs_offset_3: 'col-xs-offset-3' ,
  xs_4: 'col-xs-4' ,
  xs_offset_4: 'col-xs-offset-4' ,
  xs_5: 'col-xs-5' ,
  xs_offset_5: 'col-xs-offset-5' ,
  xs_6: 'col-xs-6' ,
  xs_offset_6: 'col-xs-offset-6' ,
  xs_7: 'col-xs-7' ,
  xs_offset_7: 'col-xs-offset-7' ,
  xs_8: 'col-xs-8' ,
  xs_offset_8: 'col-xs-offset-8' ,
  xs_9: 'col-xs-9' ,
  xs_offset_9: 'col-xs-offset-9' ,
  xs_10: 'col-xs-10' ,
  xs_offset_10: 'col-xs-offset-10' ,
  xs_11: 'col-xs-11' ,
  xs_offset_11: 'col-xs-offset-11' ,
  xs_12: 'col-xs-12' ,
  xs_offset_12: 'col-xs-offset-12' ,
  first_xs: 'first-xs' ,
  last_xs: 'last-xs' ,
  sm: 'col-sm' ,
  sm_1: 'col-sm-1' ,
  sm_offset_1: 'col-sm-offset-1' ,
  sm_2: 'col-sm-2' ,
  sm_offset_2: 'col-sm-offset-2' ,
  sm_3: 'col-sm-3' ,
  sm_offset_3: 'col-sm-offset-3' ,
  sm_4: 'col-sm-4' ,
  sm_offset_4: 'col-sm-offset-4' ,
  sm_5: 'col-sm-5' ,
  sm_offset_5: 'col-sm-offset-5' ,
  sm_6: 'col-sm-6' ,
  sm_offset_6: 'col-sm-offset-6' ,
  sm_7: 'col-sm-7' ,
  sm_offset_7: 'col-sm-offset-7' ,
  sm_8: 'col-sm-8' ,
  sm_offset_8: 'col-sm-offset-8' ,
  sm_9: 'col-sm-9' ,
  sm_offset_9: 'col-sm-offset-9' ,
  sm_10: 'col-sm-10' ,
  sm_offset_10: 'col-sm-offset-10' ,
  sm_11: 'col-sm-11' ,
  sm_offset_11: 'col-sm-offset-11' ,
  sm_12: 'col-sm-12' ,
  sm_offset_12: 'col-sm-offset-12' ,
  first_sm: 'first-sm' ,
  last_sm: 'last-sm' ,
  md: 'col-md' ,
  md_1: 'col-md-1' ,
  md_offset_1: 'col-md-offset-1' ,
  md_2: 'col-md-2' ,
  md_offset_2: 'col-md-offset-2' ,
  md_3: 'col-md-3' ,
  md_offset_3: 'col-md-offset-3' ,
  md_4: 'col-md-4' ,
  md_offset_4: 'col-md-offset-4' ,
  md_5: 'col-md-5' ,
  md_offset_5: 'col-md-offset-5' ,
  md_6: 'col-md-6' ,
  md_offset_6: 'col-md-offset-6' ,
  md_7: 'col-md-7' ,
  md_offset_7: 'col-md-offset-7' ,
  md_8: 'col-md-8' ,
  md_offset_8: 'col-md-offset-8' ,
  md_9: 'col-md-9' ,
  md_offset_9: 'col-md-offset-9' ,
  md_10: 'col-md-10' ,
  md_offset_10: 'col-md-offset-10' ,
  md_11: 'col-md-11' ,
  md_offset_11: 'col-md-offset-11' ,
  md_12: 'col-md-12' ,
  md_offset_12: 'col-md-offset-12' ,
  first_md: 'first-md' ,
  last_md: 'last-md' ,
  lg: 'col-lg' ,
  lg_1: 'col-lg-1' ,
  lg_offset_1: 'col-lg-offset-1' ,
  lg_2: 'col-lg-2' ,
  lg_offset_2: 'col-lg-offset-2' ,
  lg_3: 'col-lg-3' ,
  lg_offset_3: 'col-lg-offset-3' ,
  lg_4: 'col-lg-4' ,
  lg_offset_4: 'col-lg-offset-4' ,
  lg_5: 'col-lg-5' ,
  lg_offset_5: 'col-lg-offset-5' ,
  lg_6: 'col-lg-6' ,
  lg_offset_6: 'col-lg-offset-6' ,
  lg_7: 'col-lg-7' ,
  lg_offset_7: 'col-lg-offset-7' ,
  lg_8: 'col-lg-8' ,
  lg_offset_8: 'col-lg-offset-8' ,
  lg_9: 'col-lg-9' ,
  lg_offset_9: 'col-lg-offset-9' ,
  lg_10: 'col-lg-10' ,
  lg_offset_10: 'col-lg-offset-10' ,
  lg_11: 'col-lg-11' ,
  lg_offset_11: 'col-lg-offset-11' ,
  lg_12: 'col-lg-12' ,
  lg_offset_12: 'col-lg-offset-12' ,
  first_lg: 'first-lg' ,
  last_lg: 'last-lg' ,
  reverse: 'reverse'
}

type NativeProp = React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>


export function Grid(_props: GridProps & NativeProp): JSX.Element {
  let className = 'container'
  const props = _props as any
  const native_prop: any = {}
  for (const key of Object.getOwnPropertyNames(props)) {
    if (props[key] === true) {
      className += (' ' + GridPropsMap[key])
    } else {
      if (key === 'className') {
        className += (' ' + props[key])
      } else {
        native_prop[key] = props[key]
      }
    }
  }
  return React.createElement('div', { ...native_prop, className })
}

export function Row(_props: RowProps & NativeProp): JSX.Element {
  let className = 'row'
  const props = _props as any
  const native_prop: any = {}
  for (const key of Object.getOwnPropertyNames(props)) {
    if (props[key] === true) {
      className += (' ' + RowPropsMap[key])
    } else {
      if (key === 'className') {
        className += (' ' + props[key])
      } else {
        native_prop[key] = props[key]
      }
    }
  }
  return React.createElement('div', { ...native_prop, className })
}

export function Col(_props: ColProps & NativeProp): JSX.Element {
  let className = 'col-xs'
  const props = _props as any
  const native_prop: any = {}
  for (const key of Object.getOwnPropertyNames(props)) {
    if (props[key] === true) {
      className += (' ' + ColPropsMap[key])
    } else {
      if (key === 'className') {
        className += (' ' + props[key])
      } else {
        native_prop[key] = props[key]
      }
    }
  }
  return React.createElement('div', { ...native_prop, className })
}


export function Box(_props: NativeProp): JSX.Element {
  return Row({ ..._props, children: Col({ children: _props.children }) })
}

