const errorhandler = (err,req,res,next) => {
  if ( err.name === 'bands not found'){
    res.status(404).json({message: 'bands not found'})
  } else if (err.message === 'invalidId'){
    console.log('masuk');
    res.status(404).json({message: 'bands not found'})
  } else {
    res.status(500).json({message: 'Internal server error'})
  }
}

module.exports = errorhandler