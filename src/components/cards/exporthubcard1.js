import React from 'react';
import e1 from '../../Media/export_1.png';
import e2 from '../../Media/export_2.png';
import e3 from '../../Media/export_3.png';
import e4 from '../../Media/export_4.png';
import e5 from '../../Media/export_5.png';
import e6 from '../../Media/export_6.png';
import e7 from '../../Media/export_7.png';
import e8 from '../../Media/export_8.png';
import e9 from '../../Media/export_9.png';
import e10 from '../../Media/export_10.png';
import e11 from '../../Media/export_11.png';
import e12 from '../../Media/export_12.png';
import e13 from '../../Media/export_13.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {Row, Col} from "reactstrap"
import cake from'../../Media/sweet.jpeg'
import c2 from '../../Media/cup.jpeg'
import '../stations/card.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
   minWidth: 345,
   margin:10,
   backgroundColor: '#4C6D54',

  },
  main:{
    paddingLeft:'50px',
    paddingRight:'0px',
    display: 'flex',
    overflowX:'auto',
    width:'100%',
    justifyContent:'right',
    
  },
  media: {
    height: 140,
  },
  white:{
    fontFamily:'Roboto Sans-Serif',
    color: 'white',
    textDecoration:'none',
  },
  a:{
    justifyContent: 'center ',
  },
  
});


export default function ExportHubCard1() {
  var cakes =[
  {image:`${e1}`,title: "exporthubj1"},
  {image:`${e2}`,title: "exporthubj2"},
  {image:`${e3}`,title: "exporthubj3"},
  {image:`${e4}`,title: "exporthubj4"},
  {image:`${e5}`,title: "exporthubj5"},
  {image:`${e6}`,title: "exporthubj6"},
  {image:`${e7}`,title: "exporthubj7"},
  {image:`${e8}`,title: "exporthubj8"},
  {image:`${e9}`,title: "exporthubj9"},
  {image:`${e10}`,title: "exporthubj10"},
  //{image:`${e11}`,title: "exporthubj11"},
  //{image:`${e12}`,title: "exporthubj12"},
  
]
  const classes = useStyles();

  return (
    <Row className= {classes.main}>
    {cakes.map((cakes)=>(
      <Col>
        <Card className={classes.root}>
          <Link to = {`/${cakes.title}`}>
              <CardMedia
                className={classes.media}
                image={`${cakes.image}`}
                title={`${cakes.title}`}
              />        
              <CardActions className={classes.a}>        
                <Button size="small" color="#">
                  <div className={classes.white} style={{textDecoration:'none'}}>
                  Learn More
                  </div>
                </Button>
              </CardActions>
          </Link>
        </Card>
    </Col>
    ))}
    </Row>
    
    
  );
}

