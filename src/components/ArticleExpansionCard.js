import React,{PureComponent} from 'react'
import  {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from 'material-ui';
import {ExpandMore as ExpandMoreIcon,Business as BusinessIcon, Work as WorkIcon, DateRange as DateRangeIcon } from 'material-ui-icons'
import styled from 'styled-components';

const JobInfo=styled.div`
  >span{
    display: inline-block;
    &:first-child{
      width: 30%;
    }
    &:last-child{
      width: 70%;
    }
  }
`
class ExpansionCard extends PureComponent{
  state={
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render(){
    let {jobs}=this.props;
    return (
      <div>
        { jobs.map((item,index)=>(
          <ExpansionPanel key={index} expanded={this.state.expanded === item.id} onChange={this.handleChange(item['id'])}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div style={{width:'100%'}}>
                <div><BusinessIcon style={{color: '#2979FF',verticalAlign:'middle'}} /> {item.company}</div>
                <JobInfo>
                  <span><WorkIcon style={{color: '#2979FF',verticalAlign:'middle'}} /> {item.job}</span>
                  <span><DateRangeIcon style={{color: '#2979FF',verticalAlign:'middle'}} /> {item.time}</span>
                </JobInfo>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{fontSize:'0.9rem'}}>
                <div style={{textIndent: '35px'}}>{item.jobDetail}</div>
                <ol>
                  {
                    item.list.map((ele,i)=>(
                      <li key={i}>{ele}</li>
                    ))
                  }
                </ol>
              </div>

            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))

        }
      </div>

    )
  }
}

export default ExpansionCard