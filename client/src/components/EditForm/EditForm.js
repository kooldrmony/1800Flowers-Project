import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: '35ch',
  },
}));

function EditForm() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/")
        .then(response => response.json())
        .then(response => setData(response))
  }, []);

  return (
    <div data-testid="editFormScreen-1">
      <h1>Edit Form</h1>
      <div className={classes.root}>
        <div>
          <TextField
            id="standard-full-width"
            label="Title"
            style={{ margin: 8 }}
            placeholder="Type in title"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          {data.filter(title => {
            if(search == "") {
              return
            } else if(title.title.toLowerCase().includes(search.toLowerCase())) {
              return title
            }
          }).map(item => {
            return (
              <div>
                <TextField
                  label="ID"
                  id="margin-none"
                  defaultValue={item.id}
                  className={classes.textField}
                  helperText="Some important text"
                />
                <TextField
                  label="Body"
                  id="margin-none"
                  defaultValue={item.body}
                  className={classes.textField}
                  helperText="Some important text"
                />
              </div>

            )
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

// export default connect(mapStateToProps)(EditForm);
export default EditForm;