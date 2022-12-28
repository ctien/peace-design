import { Layout } from '@/modules/common'
import { Calculator } from '@/modules/transactions'
import { Container } from '@/modules/ui'

export default function Sellastra() {
  return (
    <Container>
      <div className="w-1/3 mx-auto">
        <Calculator />
      </div>
    </Container>
  )
}

Sellastra.Layout = Layout
