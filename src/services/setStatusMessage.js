export default function setStatusMessage(error, setMsgFunc, successMsg) {
  if (error) {
    setMsgFunc({
      title: 'Error',
      body: 'Something went wrong',
      isDelete: false,
      isSuccess: false,
      isError: true
    });
  } else {
    setMsgFunc({
      title: 'Success',
      body: successMsg,
      isDelete: false,
      isSuccess: true,
      isError: false
    });
  }
}
