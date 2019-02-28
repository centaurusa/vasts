import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Loader from '../components/loader';
import Toast from '../components/toast';
import { connect } from 'react-redux';
import { createVast, fetchVast } from '../store/actions';
import VastXML from '../components/vastXML';

class Layout extends Component {

  render() {
    const { handleCreateVast, createVastResult, errors, isLoading, handleFetchVast, vast } = this.props;
    console.log('layout render', this.props);
    return (
      <Fragment>
        <Header title="Vasts"
                createVastResult={createVastResult}
                handleCreateVast={handleCreateVast}
                handleFetchVast={handleFetchVast} 
                />
        {vast && <VastXML key={vast} content={vast} />}
        {isLoading && <Loader key={isLoading}/>}
        {createVastResult && <Toast key={createVastResult.message} message={createVastResult.message} variant="success"/>}
        {errors && <Toast key={errors[0].msg} message={errors[0].msg} variant="error"/>}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  createVastResult: state.createVastResult,
  errors: state.errors,
  vast: state.vast,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  handleCreateVast: formValue => dispatch(createVast(formValue)),
  handleFetchVast: id => dispatch(fetchVast(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
