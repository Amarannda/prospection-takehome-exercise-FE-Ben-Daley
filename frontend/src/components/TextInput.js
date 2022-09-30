import React  from 'react'
import { Button, Form } from 'semantic-ui-react'

const TextInput = () => {

  return (
    <div>
      <Form>
        <Form.Field
          control={Form.TextArea}
          rows={5}
          placeholder='Type here...'
        />
        <Form.Field
          control={Button}
          primary
          onClick={() => {}}
        >
          Analyse
        </Form.Field>
      </Form>
    </div>
  )
}

export default TextInput
