import { Trade, TradeType } from '@uniswap/sdk'
import React from 'react'
// import  { ThemeContext } from 'styled-components'
import { Field } from '../../state/swap/actions'
import { useUserSlippageTolerance } from '../../state/user/hooks'
import { TYPE } from '../../theme'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from '../../utils/prices'
import { AutoColumn, AutoColumn1 } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { RowBetween1, RowFixed } from '../Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import SwapRoute from './SwapRoute'

// const InfoLink = styled(ExternalLink)`
//   width: 100%;
//   border: 1px solid ${({ theme }) => theme.bg3};
//   padding: 6px 6px;
//   border-radius: 8px;
//   text-align: center;
//   font-size: 14px;
//   color: ${({ theme }) => theme.text1};
// `

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
  // const theme = useContext(ThemeContext)
  const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade)
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage)

  return (
    <>
      <AutoColumn1 style={{ padding: '0 16px', marginTop: "10px", marginBottom: "15px" }}>
        <RowBetween1>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={'gray'}>
              {isExactIn ? 'Minimum received' : 'Maximum sold'}
            </TYPE.black>
            <QuestionHelper text="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed." />
          </RowFixed>
          <RowFixed>
            <TYPE.black color={'white'} fontSize={14}>
              {isExactIn
                ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${trade.outputAmount.currency.symbol === 'ETH' ? 'ETH' : trade.outputAmount.currency.symbol}` ??
                '-'
                : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${trade.inputAmount.currency.symbol === 'ETH' ? 'ETH' : trade.inputAmount.currency.symbol}` ??
                '-'}
            </TYPE.black>
          </RowFixed>
        </RowBetween1>
        <RowBetween1>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={'gray'}>
              Price Impact
            </TYPE.black>
            <QuestionHelper text="The difference between the market price and estimated price due to trade size." />
          </RowFixed>
          <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
        </RowBetween1>

        <RowBetween1>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={'gray'}>
              Liquidity Provider Fee
            </TYPE.black>
            <QuestionHelper text="A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive." />
          </RowFixed>
          <TYPE.black fontSize={14} color={'white'}>
            {realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.symbol === 'ETH' ? 'ETH' : trade.inputAmount.currency.symbol}` : '-'}
          </TYPE.black>
        </RowBetween1>

        <RowBetween1>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <TYPE.black fontSize={14} fontWeight={400} color={'gray'}>
              Route
            </TYPE.black>
            <QuestionHelper text="Routing through these tokens resulted in the best price for your trade." />
          </span>
          <SwapRoute trade={trade} />
        </RowBetween1>
      </AutoColumn1>
    </>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  // const theme = useContext(ThemeContext)

  const [allowedSlippage] = useUserSlippageTolerance()

  // const showRoute = Boolean(trade && trade.route.path.length > 2)

  return (
    <AutoColumn gap="0px">
      {trade && (
        <>
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)", width: '90%', margin: '0 auto 10px' }}></div>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {/* {showRoute && (
            <>
              <AutoColumn1 style={{ margin: '15px auto' }}>

              </AutoColumn1>
            </>
          )}
          {!showRoute && (
            <AutoColumn style={{ padding: '12px 16px 0 16px' }}>
              
            </AutoColumn>
          )} */}
        </>
      )}
    </AutoColumn>
  )
}
