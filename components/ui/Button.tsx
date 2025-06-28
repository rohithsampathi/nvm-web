// components/ui/Button.tsx
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}: Props) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:   'bg-gradient-to-r from-teal to-green text-stone shadow-soft hover:brightness-110 focus:ring-gold',
    secondary: 'bg-navy text-stone hover:bg-teal focus:ring-teal shadow-soft',
    outline:   'border-2 border-gold text-gold hover:bg-gold hover:text-navy focus:ring-gold',
    ghost:     'text-ink hover:text-gold hover:bg-gold/10 focus:ring-gold',
  }

  const sizes = { sm: 'px-4 py-2 text-xs', md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' }
  const iconSz = { sm: 'h-4 w-4', md: 'h-4 w-4', lg: 'h-5 w-5' }

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {loading && (
        <svg className={`animate-spin -ml-1 mr-2 ${iconSz[size]}`} viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon className={`${iconSz[size]} mr-2`} />}
      {children}
      {Icon && iconPosition === 'right' && !loading && <Icon className={`${iconSz[size]} ml-2`} />}
    </button>
  )
}

/* —— named shortcuts (needed by Contact page) —— */
export const PrimaryButton   = (p: Omit<Props, 'variant'>) => <Button {...p} variant="primary" />
export const SecondaryButton = (p: Omit<Props, 'variant'>) => <Button {...p} variant="secondary" />
export const OutlineButton   = (p: Omit<Props, 'variant'>) => <Button {...p} variant="outline"   />
export const GhostButton     = (p: Omit<Props, 'variant'>) => <Button {...p} variant="ghost"     />

export default Button
