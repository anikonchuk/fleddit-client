export function updatePostFormData(postFormData) {
  return {
    type: 'UPDATED_POST_DATA',
    postFormData
  }
}

export function resetPostForm() {
  return {
    type: 'RESET_POST_FORM'
  }
}
