import React,{PureComponent} from 'react'
import  {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from 'material-ui';
import {ExpandMore as ExpandMoreIcon,Business as BusinessIcon, Work as WorkIcon, DateRange as DateRangeIcon ,ContentPaste as ContentPasteIcon} from 'material-ui-icons'
import styled from 'styled-components';

const JobInfo=styled.div`
  >span{
    display: inline-block;
    font-size: 14px;
    &:first-child{
      width: 55%;
    }
    &:last-child{
      width: 45%;
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
              <JobInfo style={{width:'100%'}}>
                <span><DateRangeIcon style={{color: '#2979FF',verticalAlign:'middle',width: '20px',height:'20px'}} /> {item.time}</span>
                <span><ContentPasteIcon style={{color: '#2979FF',verticalAlign:'middle',width: '20px',height:'20px'}} /> {item.name}</span>
              </JobInfo>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{fontSize:'0.9rem'}}>
                <div style={{fontWeight:'700'}}>主要内容：{item.main}</div>
                <ol>
                  {
                    item.list.map((ele,i)=>(
                      <li key={i}>{ele}</li>
                    ))
                  }
                </ol>
                <div style={{fontWeight:'700'}}>经验总结: {item.summary}</div>
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