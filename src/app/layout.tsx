"use client"

import { PropsWithChildren, useEffect, useState } from "react"

import "@/app/globals.css"
import { Navigation } from "@/app/components/ui/navigation"
import { NetworkId } from "@/config"

import { NearContext, Wallet } from "@/app/wallets/near"

const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: "hello-near.testnet",
})

// Layout Component
export default function RootLayout({ children }: PropsWithChildren) {
  const [signedAccountId, setSignedAccountId] = useState("")

  useEffect(() => {
    wallet.startUp(setSignedAccountId)
  }, [])

  return (
    <html lang="en">
      <body>
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          <Navigation />
          {children}
        </NearContext.Provider>
      </body>
    </html>
  )
}
