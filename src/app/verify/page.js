'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'
import { useActivationMutation } from '../redux/features/auth/authapi'
import { useRegistrationMutation } from '../redux/features/auth/authapi'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

export default function VerifyPage() {
  const router = useRouter()
  const {token} = useSelector((state)=>state.auth)
  const [code, setCode] = useState(['', '', '', ''])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]
    const [activation, { isError }] = useActivationMutation();
    const [register, { data}] = useRegistrationMutation();
    

  useEffect(() => {
    // Focus first input on mount
    inputRefs[0].current?.focus()

    // Start resend timer
    const timer = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleInput = (index, value) => {
    // Clear any previous errors
    setError('')


    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    // Update code array
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-advance to next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const paste = e.clipboardData.getData('text').slice(0, 4)
    if (/^\d+$/.test(paste)) {
      const digits = paste.split('')
      setCode(digits.concat(Array(4 - digits.length).fill('')))
      // Focus last input or the next empty one
      const focusIndex = Math.min(digits.length, 3)
      inputRefs[focusIndex].current?.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const verificationCode = code.join('')
    
    if (verificationCode.length !== 4) {
      setError('Please enter all 4 digits')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const result = await activation({
        activation_token: token,
        activation_code: verificationCode,
      }).unwrap();
      alert(result?.message || "Activation successful");
      router.push("/login");
    } catch (error) {
      alert(error?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    if (resendTimer > 0) return
    
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setResendTimer(30)
      // Show success message
      setError('A new code has been sent to your email')
    } catch (err) {
      setError('Failed to resend code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link 
            href="/login" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
          
          <div className="mt-6 flex justify-center">
            <div className="relative h-20 w-20 rounded-full bg-[#FFE6F0] p-5">
              <Mail className="h-10 w-10 text-[#FFB5C7]" />
            </div>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Check your email
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a 4-digit verification code to<br />
            <span className="font-medium text-gray-900">example@email.com</span>
          </p>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInput(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`h-16 w-16 rounded-xl border-2 bg-white text-center text-2xl font-semibold 
                  ${error ? 'border-red-500 bg-red-50' : 'border-gray-200'} 
                  focus:border-[#FFB5C7] focus:outline-none focus:ring-2 focus:ring-[#FFB5C7] focus:ring-opacity-50`}
                required
              />
            ))}
          </div>

          {error && (
            <p className="text-center text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading || code.some(digit => !digit)}
            className="group relative flex w-full justify-center rounded-lg bg-[#FFB5C7] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff9fb8] focus:outline-none focus:ring-2 focus:ring-[#FFB5C7] focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>

        {/* Resend Code */}
        <div className="text-center">
          <button
            onClick={handleResend}
            disabled={resendTimer > 0 || isLoading}
            className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
          >
            {resendTimer > 0 ? (
              <span>Resend code in {resendTimer}s</span>
            ) : (
              <span>Resend code</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

