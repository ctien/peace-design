import React, { useState } from 'react'
import { Button, Container } from '../ui'

export default function Calculator() {
  const FEE = 0.1
  const PRICE = 263
  const [quantity, setQuantity] = useState<number | null>(null)

  return (
    <form className="w-full shadow-2xl rounded-2xl p-6 mx-auto mt-16">
      <p className="text-xl font-semibold">Bán Astra nhận tiền</p>
      <div className="my-8">
        <input
          type="text"
          value={quantity || ''}
          placeholder="0"
          className="px-4 py-2 rounded text-center text-3xl font-bold outline-none w-full"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <p className="text-xs text-center font-medium text-gray-700">
          Số Astra muốn bán
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded mb-8">
        <div className="flex justify-between">
          <p>Tỷ giá 1 ASA</p>
          <p>{PRICE}</p>
        </div>
        <div className="flex justify-between">
          <p>Phí giao dịch</p>
          <p>{`${FEE * 100}%`}</p>
        </div>
        <div className="flex justify-between">
          <p>Ước tính nhận được</p>
          <b>
            {quantity
              ? Number(
                  quantity * PRICE - quantity * PRICE * FEE,
                ).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'VND',
                })
              : ''}
          </b>
        </div>
      </div>

      <div className="mb-4">
        <p>
          Số tài khoản <b>Momo</b>
          <span className="text-red-500">*</span>
        </p>
        <input
          className="my-2 w-full border py-2 px-4 rounded"
          type="text"
          placeholder="0123456789"
        />
        <p>
          Tên người nhận
          <span className="text-red-500">*</span>
        </p>
        <input
          className="my-2 w-full border py-2 px-4 rounded"
          type="text"
          placeholder="Nguyen Van A"
        />
      </div>

      <Button isStretch className="rounded" type="button">
        Bán Astra
      </Button>
    </form>
  )
}
