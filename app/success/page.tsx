"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useCartStore } from '@/store/cart-store'

const SuccessPage = () => {
	const {clearCart} = useCartStore()
	useEffect(() => {
		clearCart()
	}, [clearCart])

  return (
	<div className="container mx-auto px-4 py-8 text-center">
		<h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
		<p className="mb-4">Thank you for your purchase. Your order is being processed.</p>
		<Link className="text-blue-600 hover:underline" href="/products">
		Continue Shopping
		</Link>
	</div>
  )
}

export default SuccessPage