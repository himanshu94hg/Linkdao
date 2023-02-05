import React, { useLayoutEffect } from "react";
import "./index.scss";

const Disclaimer = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="container-fluid px-0 position-relative">
        <div className="container-fluid">
          <div className="container-fluid disclaimer-hero" />
          <div className="container-lg disclaimer-content">
            <div className="container pt-5 pb-5">
              <div id="disclaimer">
                <h1 className="metaverse">LinkDao</h1>
                <h1>Disclaimer</h1>
              </div>{" "}
              <br />
              <p>
                LinkDao is a decentralized platform that people can use for
                yield farming, staking and enabling users to accumulate their
                crypto assets. Your use of the LinkDao involves various risks,
                including, but not limited to, losses while digital assets are
                being supplied to the Dex's like Uniswap / PancakeSwap and
                losses due to the fluctuation of prices of tokens in a liquidity
                pool. Before using the LinkDao, you should review the relevant
                documentation from our Github to make sure you understand how
                the LinkDao works. The LinkDao DeFi project is public,
                open-source or source-available software including a set of
                smart contracts that are deployed currently on the Binance Smart
                Chain.
              </p>
              <p>
                Additionally, just as you can access email protocols such as
                SMTP through multiple email clients, you can access the LinkDao
                dApp through dozens of web or mobile interfaces. You are
                responsible for doing your own diligence on those interfaces to
                understand the fees and risks they present.
              </p>
              <p>
                All content available on our website, on hyperlinked websites,
                and on applications, forums, blogs, social media accounts and
                other platforms associated with LinkDao is intended solely to
                provide you with general information. We make no warranties of
                any kind with respect to our content, including, but not limited
                to, the accuracy and currency of the information. None of the
                content we provide should be construed as financial, legal or
                any other type of advice on which you may specifically rely for
                any purpose. Any use or reliance you place on our content is
                solely at your own risk. What you should do is conduct your own
                research, review and analysis, and verify our content before
                relying on it. Trading is a high-risk activity that can result
                in significant losses, so you should consult with your financial
                advisor before making any decisions. Nothing on our Site should
                be considered an invitation or offer to take any action.
              </p>
              <p>
                <b>
                  AS DESCRIBED IN THE LINKDAO LICENSES, THE SMART CONTRACTS AND
                  SERVICE ARE PROVIDED WITHOUT WARRANTY OF ANY KIND, ALL THE
                  LIABILITIES ARE DISCLAIMED, WE’RE NOT RESPONSIBLE FOR ANY
                  DAMAGE RELATED TO OR OUT OF THE USE OF SOFTWARE OR SERVICES
                  DELIVERED BY US. DAMAGES CANNOT BE INVOICED TO US. IN CASE OF
                  A HACK OR EXPLOIT WE CANNOT HELP IN ANY WAY.
                </b>
              </p>
              <p>
                LICENSE &amp; DISCLAIMER BSD 3-Clause License Copyright (c) BC
                &amp; Contributors All rights reserved.
              </p>
              <p>
                Redistribution and use in source and binary forms, with or
                without modification, are permitted provided that the following
                conditions are met:
              </p>
              <ol>
                <li>
                  Redistributions of source code must retain the above copyright
                  notice, this list of conditions and the following disclaimer.
                </li>
                <li>
                  Redistributions in binary form must reproduce the above
                  copyright notice, this list of conditions and the following
                  disclaimer in the documentation and/or other materials
                  provided with the distribution.
                </li>
                <li>
                  Neither the name of the copyright holder nor the names of its
                  contributors may be used to endorse or promote products
                  derived from this software without specific prior written
                  permission.
                </li>
              </ol>
              <p>
                <b>
                  THIS SOFTWARE AND / OR SERVICE IS PROVIDED BY THE COPYRIGHT
                  HOLDERS, CONTRACTOR AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
                  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
                  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
                  COPYRIGHT HOLDER, CONTRACTOR OR CONTRIBUTORS BE LIABLE FOR ANY
                  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
                  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
                  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
                  DATA, OR PROFITS; OR BUS INESS INTERRUPTION) HOWEVER CAUSED
                  AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
                  LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
                  IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
                  THE POSSIBILITY OF SUCH DAMAGE.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
