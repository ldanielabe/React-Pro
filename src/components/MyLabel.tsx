import './mylabel.css'

export interface Props{
  /**
   * Is this the name of the label
   */
  label: string,
  /**
   * Is this the size of the label
   */
  size: 'normal'|'h1'|'h2'|'h3',
  /**
   * When it is true the label will have capital letter
   */
  allCaps?: boolean,
  /**
   * Is this the color of the label
   */
  color?: 'primary'|'secondary'|'tertiary'

}
export const MyLabel = ({
  allCaps= false,
  color='primary',
  label= 'No Label',
  size= 'normal'
}: Props) => {
  return (
    <div className={`${size} text-${color}`}>
      {allCaps?label.toUpperCase():label}
    </div>
  )
}
