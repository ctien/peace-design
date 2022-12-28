import { DashboardLayout } from '@/modules/dashboard'
import { Calculator } from '@/modules/transactions'

export default function Sellastra() {
  return (
    <div className="mx-auto w-1/3">
      <Calculator />
    </div>
  )
}

Sellastra.Layout = DashboardLayout
