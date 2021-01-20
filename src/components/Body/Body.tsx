import { Input, Form, Row, Col, Button } from "antd";

export default function Body () {
  function handleFinish (a: any) {
    console.log(a)
  }

  return <>
    <Form
      layout="vertical"
      onFinish={handleFinish}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name={['fullname']}
            label="Nome completo"
          >
            <Input placeholder="Ex. Daniel Bonifacio" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={['email']}
            label="E-mail"
          >
            <Input placeholder="Ex. daniel.bonifacio@algaworks.com" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={['password']}
            label="Senha"
          >
            <Input
              type="password"
              placeholder="Ex. daniel.bonifacio@algaworks.com"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Salvar usuário
        </Button>
      </Row>
    </Form>
  </>
}