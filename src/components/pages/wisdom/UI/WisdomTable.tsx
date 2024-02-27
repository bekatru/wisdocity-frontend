import { Checkbox, Popselect, ShadowBox } from 'components';
import { ChangeEvent, FC, ReactNode } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import classNames from 'classnames';
import { IPopselectOption } from 'components/ui/Popselect';


export type TDataContentItem = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any,
    id: string | number
};
interface Column {
  title: string;
  key: string | null;
  render?: (item: TDataContentItem) => React.ReactNode;
}
const PAGINATION_LIMIT = 10;
interface WisdomTableProps {
  dataContent: TDataContentItem[],
  columns: (Column | undefined)[]
  popselectOptionsTable: IPopselectOption[],
  currentPage: number,
  goToPreviousPage: () => void,
  goToNextPage: () => void,
  goToPage: (page: number) => void,
  header?: ReactNode,

  onSelectItem: (e: ChangeEvent<HTMLInputElement>, row: TDataContentItem) => void,
  onSelectAllItems: (e: ChangeEvent<HTMLInputElement>) => void,
  selectedItems: {
    [key: string]: TDataContentItem
  }
}


const WisdomTable: FC<WisdomTableProps> = (props) => {
  const {selectedItems, onSelectItem, onSelectAllItems, header, dataContent, columns, popselectOptionsTable, currentPage, goToNextPage, goToPage, goToPreviousPage} = props;
  const numberOfPages = Math.ceil(dataContent.length ? dataContent.length / PAGINATION_LIMIT : 0);
  const pages = [...Array(numberOfPages).keys()].map(key => key + 1);


  return (
    <ShadowBox className={"pb-0"}>
      {header}
        <div>
            <div className="mt-2 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className={"flex items-end py-3.5 pl-1"}>
                                        <Popselect
                                            button={
                                                <EllipsisVerticalIcon className="h-4 w-4 text-black mr-2" />
                                            }
                                            options={popselectOptionsTable}
                                        />
                                        <Checkbox checked={Object.values(selectedItems).length === dataContent.length} onChange={onSelectAllItems}/>
                                    </th>
                                    {
                                      columns.map((item, i) => (
                                        <th key={i} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">{item?.title}</th>
                                        ))
                                      }
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {
                                dataContent.slice((currentPage - 1) * PAGINATION_LIMIT, (currentPage - 1) * PAGINATION_LIMIT + PAGINATION_LIMIT).map((row) => 
                                <tr key={row.id}>
                                  <td className="text-right pr-4 w-[90px]"><Checkbox checked={Boolean(selectedItems[row.id])} onChange={(e) => onSelectItem(e, row)}/></td>
                                  {
                                    columns.map((column) => (
                                      <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                                        {column?.render ? column?.render(column?.key ? row[column?.key ?? ''] : row) : row[column?.key ?? '']}
                                      </td>
                                    ))
                                  }
                                  
                                </tr>)
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0 mt-4 gap-6 pb-5">
                <div className="-mt-px flex">
                    <a
                        onClick={currentPage > 1 ? goToPreviousPage : undefined}
                        className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
                    >
                        <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Previous
                    </a>
                </div>
                <div className="hidden md:-mt-px md:flex">
                    {
                        (numberOfPages > 6 ? pages.slice(0, 3) : pages).map((page) => {
                            return (
                                <a
                                    key={page}
                                    onClick={() => goToPage(page)}
                                    className={classNames(
                                        "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium cursor-pointer",
                                        { "border-purple-500 text-purple-600": currentPage === page },
                                        { "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": currentPage !== page },
                                    )}
                                >
                                    {page}
                                </a>
                            )
                        })
                    }
                    {
                        numberOfPages > 6 && (
                            <span className={classNames(
                                "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium",
                                { "border-purple-500 text-purple-600": Boolean(currentPage > 3 && currentPage < numberOfPages - 2)},
                                { "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": !(currentPage > 3 && currentPage < numberOfPages - 2) },
                            )}>
                        ...
                    </span>
                        )
                    }
                    {
                        numberOfPages > 6 && pages.slice(numberOfPages - 3, numberOfPages).map((page) => (
                            <a
                            key={page}
                            onClick={() => goToPage(page)}
                            className={classNames(
                                "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium cursor-pointer",
                                { "border-purple-500 text-purple-600": currentPage === page },
                                { "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": currentPage !== page },
                            )}
                        >
                            {page}
                        </a>
                        ))
                    }


                </div>
                <div className="-mt-px flex">
                    <a
                        onClick={currentPage < numberOfPages ? goToNextPage : undefined}
                        className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
                    >
                        Next
                        <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                </div>
            </nav>
        </div>

    </ShadowBox>
)
};

export default WisdomTable;