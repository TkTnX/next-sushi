import React from 'react'

const ErrorMessage = ({errorText}: {errorText: string}) => {
  return <p className="text-[#FF6633] text-xs mt-2">{errorText}</p>;
}

export default ErrorMessage