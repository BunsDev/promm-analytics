import React from 'react'
import styled from 'styled-components'
import { useDarkModeManager } from 'state/user/hooks'

const ToggleElement = styled.span<{ isDarkMode: boolean }>`
  border-radius: 50%;
  background-color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.primary : 'none')};
  font-size: 1rem;
  font-weight: 400;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledToggle = styled.button`
  border-radius: 999px;
  border: none;
  background: ${({ theme }) => theme.bg3};
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0;
  opacity: 1;
  width: 56px;
  height: 28px;
  transition: opacity 0.25s ease;

  :hover {
    opacity: 0.9;
  }
`

export default function ThemeToggle() {
  const [isDarkMode, toggle] = useDarkModeManager()
  return (
    <StyledToggle onClick={toggle}>
      <ToggleElement isDarkMode={!isDarkMode}>
        {!isDarkMode ? (
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 12.065C7.35 12.065 7.63 12.345 7.63 12.695V13.306C7.63 13.656 7.35 13.936 7 13.936H6.994C6.644 13.936 6.364 13.656 6.364 13.306V12.696C6.364 12.346 6.644 12.066 6.994 12.066H7V12.065ZM11.677 10.755L11.925 11.003C12.174 11.251 12.174 11.652 11.925 11.9C11.677 12.148 11.276 12.148 11.028 11.9L10.78 11.652C10.532 11.404 10.532 11.009 10.786 10.755C11.028 10.513 11.429 10.506 11.677 10.755ZM3.207 10.748L3.214 10.755C3.455 10.996 3.462 11.397 3.214 11.645L2.965 11.894C2.717 12.142 2.316 12.142 2.068 11.894C1.82 11.645 1.82 11.251 2.062 10.996L2.31 10.748C2.558 10.5 2.96 10.5 3.207 10.748ZM7 3.15C9.106 3.15 10.818 4.862 10.818 6.968C10.818 9.075 9.106 10.786 7 10.786C4.894 10.786 3.182 9.075 3.182 6.968C3.182 4.862 4.894 3.15 7 3.15ZM7 4.455C5.594 4.455 4.455 5.595 4.455 7C4.455 8.406 5.595 9.545 7 9.545C8.406 9.545 9.545 8.405 9.545 7C9.545 5.594 8.405 4.455 7 4.455ZM1.28 6.332C1.63 6.332 1.91 6.612 1.91 6.968V6.975C1.91 7.325 1.63 7.605 1.273 7.598H0.63C0.28 7.598 0 7.318 0 6.968V6.962C0 6.612 0.28 6.332 0.63 6.332H1.28ZM13.364 6.332C13.714 6.332 13.994 6.612 13.994 6.962V6.968C13.994 7.318 13.714 7.598 13.364 7.598H12.721C12.371 7.598 12.091 7.318 12.091 6.968V6.962C12.091 6.612 12.371 6.332 12.721 6.332H13.364ZM2.965 2.036L3.214 2.285C3.462 2.526 3.462 2.934 3.214 3.175L3.207 3.182C2.959 3.43 2.565 3.43 2.317 3.182L2.068 2.934C1.82 2.692 1.82 2.291 2.068 2.043L2.075 2.036C2.316 1.795 2.717 1.788 2.965 2.036ZM11.932 2.043C12.18 2.291 12.18 2.685 11.932 2.933L11.684 3.182C11.442 3.43 11.041 3.43 10.793 3.182L10.786 3.175C10.538 2.934 10.538 2.533 10.786 2.285L11.035 2.036C11.283 1.795 11.684 1.795 11.932 2.043ZM7.006 0C7.356 0 7.636 0.28 7.636 0.63V1.247C7.636 1.597 7.356 1.877 7 1.871H6.994C6.644 1.871 6.364 1.591 6.364 1.241V0.63C6.364 0.28 6.644 0 7 0H7.006Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
            <g fill="none" fillRule="evenodd">
              <g fill="#859AA5" fillRule="nonzero">
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="M7 12.065c.35 0 .63.28.63.63v.611c0 .35-.28.63-.63.63h-.006c-.35 0-.63-.28-.63-.63v-.61c0-.35.28-.63.63-.63H7zm4.677-1.31l.248.248c.249.248.249.649 0 .897-.248.248-.649.248-.897 0l-.248-.248c-.248-.248-.248-.643.006-.897.242-.242.643-.249.891 0zm-8.47-.007l.007.007c.241.241.248.642 0 .89l-.249.249c-.248.248-.649.248-.897 0-.248-.249-.248-.643-.006-.898l.248-.248c.248-.248.65-.248.897 0zM7 3.15c2.106 0 3.818 1.712 3.818 3.818 0 2.107-1.712 3.818-3.818 3.818S3.182 9.075 3.182 6.968C3.182 4.862 4.894 3.15 7 3.15zm0 1.305c-1.406 0-2.545 1.14-2.545 2.545 0 1.406 1.14 2.545 2.545 2.545 1.406 0 2.545-1.14 2.545-2.545 0-1.406-1.14-2.545-2.545-2.545zM1.28 6.332c.35 0 .63.28.63.636v.007c0 .35-.28.63-.637.623H.63c-.35 0-.63-.28-.63-.63v-.006c0-.35.28-.63.63-.63h.65zm12.084 0c.35 0 .63.28.63.63v.006c0 .35-.28.63-.63.63h-.643c-.35 0-.63-.28-.63-.63v-.006c0-.35.28-.63.63-.63h.643zM2.965 2.036l.249.249c.248.241.248.649 0 .89l-.007.007c-.248.248-.642.248-.89 0l-.249-.248c-.248-.242-.248-.643 0-.891l.007-.007c.241-.241.642-.248.89 0zm8.967.007c.248.248.248.642 0 .89l-.248.249c-.242.248-.643.248-.891 0l-.007-.007c-.248-.241-.248-.642 0-.89l.249-.249c.248-.241.649-.241.897.007zM7.006 0c.35 0 .63.28.63.63v.617c0 .35-.28.63-.636.624h-.006c-.35 0-.63-.28-.63-.63V.63c0-.35.28-.63.636-.63h.006z"
                            transform="translate(-29 -740) translate(19 734) translate(10 6)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        )}
      </ToggleElement>
      <ToggleElement isDarkMode={isDarkMode}>
        {isDarkMode ? (
          <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.911 0.924993C5.105 0.914993 5.247 1.10899 5.166 1.28199C5.086 1.44899 5.016 1.61699 4.956 1.78699C4.936 1.84199 4.92 1.89199 4.904 1.94199L4.903 1.94599C4.023 4.71799 5.702 7.66299 8.484 8.37599L8.487 8.37699C8.531 8.38899 8.575 8.39899 8.62 8.40999L8.651 8.41699C8.826 8.45499 9.005 8.48499 9.188 8.50599C9.376 8.52599 9.462 8.74999 9.356 8.90799C9.278 9.01999 9.196 9.12799 9.109 9.23299C9.038 9.31899 8.968 9.39899 8.896 9.47599L8.88 9.49299C7.775 10.665 6.123 11.31 4.33 11.02C2.27 10.69 0.584996 9.06599 0.187996 7.01399C-0.370004 4.15299 1.498 1.54799 4.167 1.01699L4.185 1.01399C4.285 0.993993 4.387 0.976993 4.49 0.963993L4.497 0.962993C4.633 0.944993 4.771 0.932993 4.911 0.924993ZM3.787 2.17699C2.035 2.80699 0.863996 4.60499 1.15 6.60499L1.186 6.82099C1.502 8.45099 2.85 9.75099 4.492 10.015H4.494C5.711 10.213 6.842 9.87499 7.697 9.19999C4.852 8.18399 3.132 5.16199 3.787 2.17699Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12">
            <g fill="none" fillRule="evenodd">
              <g fill="#859AA5" fillRule="nonzero">
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="M4.821.015c.194-.01.336.184.255.357-.08.167-.15.335-.21.505-.02.055-.036.105-.052.155l-.001.004c-.88 2.772.799 5.717 3.581 6.43l.003.001c.044.012.088.022.133.033l.031.007c.175.038.354.068.537.089.188.02.274.244.168.402-.078.112-.16.22-.247.325-.071.086-.141.166-.213.243l-.016.017C7.685 9.755 6.033 10.4 4.24 10.11 2.18 9.78.495 8.156.098 6.104-.46 3.243 1.408.638 4.077.107l.018-.003c.1-.02.202-.037.305-.05l.007-.001c.136-.018.274-.03.414-.038zM3.697 1.267C1.945 1.897.774 3.695 1.06 5.695l.036.216c.316 1.63 1.664 2.93 3.306 3.194h.002c1.217.198 2.348-.14 3.203-.815-2.845-1.016-4.565-4.038-3.91-7.023z"
                            transform="translate(-55 -741) translate(19 734) translate(10 6) translate(26.09 1.91)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        )}
      </ToggleElement>
    </StyledToggle>
  )
}
