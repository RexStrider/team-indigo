import './PostCreate.css'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, MenuItem, Button } from '@material-ui/core'

const visibilityOptions = [
    {
      value: 'public',
      label: 'Public',
    },
    {
      value: 'group-only',
      label: 'Group only',
    }
  ];
  
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const PostCreate = props => {
    const classes = useStyles();

    const [visibility, setVisibility] = React.useState('');
    const [tags, setTags] = useState([])
    const [question, setQuestion] = useState('')
    const [description, setDescription] = useState('')
    const [options, setOptions] = useState([])

    const handleChange = event => {
        setVisibility(event.target.value);
    };

    const handleClick = event => {
        const ref=event.target.textContent.split(' ')[1]
        const input=document.getElementById(`${ref}-input`)
        const { value }=input
        if (ref === 'tag') setTags([...tags, value])
        if (ref === 'option') setOptions([...options, value])
        input.value=''
    }

    return (
        <Container>
            <h1>Create a Poll</h1>
            <form className={classes.container} noValidate autoComplete='off'>
                <div>
                    <TextField
                    id="select-visibility"
                    select
                    label="Select Poll Visibility"
                    className={classes.textField}
                    value={visibility}
                    onChange={handleChange}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    helperText="Please select a visibility option"
                    margin="normal"
                    >
                    {visibilityOptions.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
                <div className='field'>
                    <TextField
                    id="tag-input"
                    className={classes.textField}
                    label="Tags"
                    margin="normal" />
                    <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleClick} >
                        Add tag
                    </Button>
                </div>
                <div id='tags'>
                    {tags.map(el => {
                        return (
                            <Button
                            key={el}
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            size="medium" >
                                {el}
                            </Button>
                        )
                    })}
                </div>
                <div className='field'>
                    <TextField
                    id="question"
                    className={classes.textField}
                    label="Question"
                    margin="normal"
                    onChange={event => { setQuestion(event.target.value) }}
                    value={question} />
                </div>
                <div className='field'>
                    <TextField
                    id="description"
                    className={classes.textField}
                    label="Description"
                    margin="normal"
                    onChange={event => { setDescription(event.target.value) }}
                    value={description} />
                </div>
                <div className='field'>
                    <TextField
                    id="option-input"
                    className={classes.textField}
                    label="Voting Option"
                    margin="normal" />
                    <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleClick} >
                        Add option
                    </Button>
                </div>
                <div id='options'>
                {options.map(el => {
                        return (
                            <Button
                            key={el}
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            size="medium" >
                                {el}
                            </Button>
                        )
                    })}
                </div>
            </form>
        </Container>
    )
}

export default PostCreate